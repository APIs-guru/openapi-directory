import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteListenerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ListenerArn" })
  listenerArn: string;
}
