import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopContinuousExportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exportId" })
  exportId: string;
}
