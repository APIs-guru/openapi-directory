import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FleetAttributes } from "./fleetattributes";


// DescribeFleetAttributesOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeFleetAttributesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetAttributes", elemType: shared.FleetAttributes })
  fleetAttributes?: FleetAttributes[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
