import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SampleChannelDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payloads" })
  payloads?: string[];
}
