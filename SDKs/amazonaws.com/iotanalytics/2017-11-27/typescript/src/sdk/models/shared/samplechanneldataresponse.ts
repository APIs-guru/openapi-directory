import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SampleChannelDataResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=payloads" })
  payloads?: string[];
}
