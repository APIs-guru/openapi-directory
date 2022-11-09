import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeFleetAttributesInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeFleetAttributesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetIds" })
  fleetIds?: string[];

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
