import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StreamInfo } from "./streaminfo";


export class DescribeStreamResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=streamInfo" })
  streamInfo?: StreamInfo;
}
