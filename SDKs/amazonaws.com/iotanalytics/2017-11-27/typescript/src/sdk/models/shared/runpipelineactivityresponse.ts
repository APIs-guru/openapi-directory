import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RunPipelineActivityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logResult" })
  logResult?: string;

  @SpeakeasyMetadata({ data: "json, name=payloads" })
  payloads?: string[];
}
