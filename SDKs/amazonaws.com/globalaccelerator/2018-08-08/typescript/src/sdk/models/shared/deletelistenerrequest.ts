import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteListenerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ListenerArn" })
  listenerArn: string;
}
