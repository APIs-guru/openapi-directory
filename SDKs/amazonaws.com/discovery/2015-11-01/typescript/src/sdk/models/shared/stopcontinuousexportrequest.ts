import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopContinuousExportRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=exportId" })
  exportId: string;
}
