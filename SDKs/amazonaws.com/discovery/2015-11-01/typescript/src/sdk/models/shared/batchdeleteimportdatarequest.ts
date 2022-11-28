import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BatchDeleteImportDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=importTaskIds" })
  importTaskIds: string[];
}
