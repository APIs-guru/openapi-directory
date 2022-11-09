import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LocationAttributes } from "./locationattributes";


// DescribeFleetLocationAttributesOutput
/** 
 * Represents the returned data in response to a request operation. 
**/
export class DescribeFleetLocationAttributesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetArn" })
  fleetArn?: string;

  @Metadata({ data: "json, name=FleetId" })
  fleetId?: string;

  @Metadata({ data: "json, name=LocationAttributes", elemType: shared.LocationAttributes })
  locationAttributes?: LocationAttributes[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
