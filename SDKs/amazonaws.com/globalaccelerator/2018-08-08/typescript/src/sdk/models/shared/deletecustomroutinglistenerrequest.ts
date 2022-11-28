import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteCustomRoutingListenerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ListenerArn" })
  listenerArn: string;
}
