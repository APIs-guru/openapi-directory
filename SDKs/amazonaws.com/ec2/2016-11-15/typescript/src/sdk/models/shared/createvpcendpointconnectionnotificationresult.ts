import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionNotification } from "./connectionnotification";



export class CreateVpcEndpointConnectionNotificationResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientToken?: string;

  @SpeakeasyMetadata()
  connectionNotification?: ConnectionNotification;
}
