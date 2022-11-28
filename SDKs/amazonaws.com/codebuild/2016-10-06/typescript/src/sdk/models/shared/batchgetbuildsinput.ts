import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BatchGetBuildsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids: string[];
}
