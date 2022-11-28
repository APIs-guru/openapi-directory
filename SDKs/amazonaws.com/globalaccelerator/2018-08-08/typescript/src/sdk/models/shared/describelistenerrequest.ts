import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeListenerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ListenerArn" })
  listenerArn: string;
}
