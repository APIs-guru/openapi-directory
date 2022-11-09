import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExportStatusEnum } from "./exportstatusenum";


// ExportSummary
/** 
 * Summary information about an export task.
**/
export class ExportSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExportArn" })
  exportArn?: string;

  @Metadata({ data: "json, name=ExportStatus" })
  exportStatus?: ExportStatusEnum;
}
