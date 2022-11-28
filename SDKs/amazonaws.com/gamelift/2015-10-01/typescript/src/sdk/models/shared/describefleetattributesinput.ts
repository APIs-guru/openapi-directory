import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeFleetAttributesInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeFleetAttributesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetIds" })
  fleetIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
