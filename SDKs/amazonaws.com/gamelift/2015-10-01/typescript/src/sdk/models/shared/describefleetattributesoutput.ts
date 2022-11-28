import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FleetAttributes } from "./fleetattributes";



// DescribeFleetAttributesOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeFleetAttributesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetAttributes", elemType: FleetAttributes })
  fleetAttributes?: FleetAttributes[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
