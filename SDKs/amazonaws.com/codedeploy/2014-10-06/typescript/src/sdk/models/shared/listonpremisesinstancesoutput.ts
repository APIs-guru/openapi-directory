import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListOnPremisesInstancesOutput
/** 
 * Represents the output of the list on-premises instances operation.
**/
export class ListOnPremisesInstancesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceNames" })
  instanceNames?: string[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
