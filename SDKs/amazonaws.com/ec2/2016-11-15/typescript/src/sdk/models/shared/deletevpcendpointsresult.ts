import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UnsuccessfulItem } from "./unsuccessfulitem";



// DeleteVpcEndpointsResult
/** 
 * Contains the output of DeleteVpcEndpoints.
**/
export class DeleteVpcEndpointsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: UnsuccessfulItem })
  unsuccessful?: UnsuccessfulItem[];
}
