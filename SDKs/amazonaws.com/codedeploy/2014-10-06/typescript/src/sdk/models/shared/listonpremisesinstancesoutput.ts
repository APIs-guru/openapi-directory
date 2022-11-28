import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListOnPremisesInstancesOutput
/** 
 * Represents the output of the list on-premises instances operation.
**/
export class ListOnPremisesInstancesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceNames" })
  instanceNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
