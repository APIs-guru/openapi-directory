import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamInfo } from "./streaminfo";



export class DescribeStreamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=streamInfo" })
  streamInfo?: StreamInfo;
}
