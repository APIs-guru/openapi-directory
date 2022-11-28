import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartExportTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exportId" })
  exportId?: string;
}
