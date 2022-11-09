import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeFleetUtilizationInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeFleetUtilizationInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetIds" })
  fleetIds?: string[];

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
