import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UnsuccessfulItem } from "./unsuccessfulitem";



export class AcceptVpcEndpointConnectionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: UnsuccessfulItem })
  unsuccessful?: UnsuccessfulItem[];
}
