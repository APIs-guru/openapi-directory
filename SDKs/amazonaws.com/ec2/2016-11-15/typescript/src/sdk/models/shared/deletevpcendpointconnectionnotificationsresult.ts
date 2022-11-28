import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UnsuccessfulItem } from "./unsuccessfulitem";



export class DeleteVpcEndpointConnectionNotificationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: UnsuccessfulItem })
  unsuccessful?: UnsuccessfulItem[];
}
