import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RunPipelineActivityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=logResult" })
  logResult?: string;

  @Metadata({ data: "json, name=payloads" })
  payloads?: string[];
}
