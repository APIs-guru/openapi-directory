import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartExportTaskResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=exportId" })
  exportId?: string;
}
