import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeCustomRoutingListenerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ListenerArn" })
  listenerArn: string;
}
