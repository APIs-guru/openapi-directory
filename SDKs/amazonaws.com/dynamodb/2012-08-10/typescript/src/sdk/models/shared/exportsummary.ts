import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportStatusEnum } from "./exportstatusenum";



// ExportSummary
/** 
 * Summary information about an export task.
**/
export class ExportSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExportArn" })
  exportArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ExportStatus" })
  exportStatus?: ExportStatusEnum;
}
