import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeFleetLocationAttributesInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeFleetLocationAttributesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetId" })
  fleetId: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=Locations" })
  locations?: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
