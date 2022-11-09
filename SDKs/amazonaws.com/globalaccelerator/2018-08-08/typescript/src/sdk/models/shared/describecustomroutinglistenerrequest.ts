import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeCustomRoutingListenerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ListenerArn" })
  listenerArn: string;
}
