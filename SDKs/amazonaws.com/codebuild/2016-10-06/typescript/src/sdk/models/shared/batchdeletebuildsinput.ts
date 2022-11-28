import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BatchDeleteBuildsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids: string[];
}
