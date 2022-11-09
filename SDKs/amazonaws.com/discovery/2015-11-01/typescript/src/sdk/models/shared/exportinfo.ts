import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExportStatusEnum } from "./exportstatusenum";


// ExportInfo
/** 
 * Information regarding the export status of discovered data. The value is an array of objects.
**/
export class ExportInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=configurationsDownloadUrl" })
  configurationsDownloadUrl?: string;

  @Metadata({ data: "json, name=exportId" })
  exportId: string;

  @Metadata({ data: "json, name=exportRequestTime" })
  exportRequestTime: Date;

  @Metadata({ data: "json, name=exportStatus" })
  exportStatus: ExportStatusEnum;

  @Metadata({ data: "json, name=isTruncated" })
  isTruncated?: boolean;

  @Metadata({ data: "json, name=requestedEndTime" })
  requestedEndTime?: Date;

  @Metadata({ data: "json, name=requestedStartTime" })
  requestedStartTime?: Date;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage: string;
}
