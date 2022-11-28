import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocationAttributes } from "./locationattributes";



// DescribeFleetLocationAttributesOutput
/** 
 * Represents the returned data in response to a request operation. 
**/
export class DescribeFleetLocationAttributesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetArn" })
  fleetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId?: string;

  @SpeakeasyMetadata({ data: "json, name=LocationAttributes", elemType: LocationAttributes })
  locationAttributes?: LocationAttributes[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
