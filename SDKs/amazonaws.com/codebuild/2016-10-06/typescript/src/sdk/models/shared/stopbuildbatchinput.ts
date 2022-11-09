import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopBuildBatchInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;
}
