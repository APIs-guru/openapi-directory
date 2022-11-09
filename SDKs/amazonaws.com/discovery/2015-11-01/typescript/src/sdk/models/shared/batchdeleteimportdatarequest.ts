import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BatchDeleteImportDataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=importTaskIds" })
  importTaskIds: string[];
}
