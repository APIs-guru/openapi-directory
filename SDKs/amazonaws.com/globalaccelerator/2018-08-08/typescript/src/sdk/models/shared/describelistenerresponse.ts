import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Listener } from "./listener";


export class DescribeListenerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Listener" })
  listener?: Listener;
}
