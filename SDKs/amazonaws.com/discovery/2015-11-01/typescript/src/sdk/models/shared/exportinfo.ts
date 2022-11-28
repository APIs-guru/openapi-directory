import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportStatusEnum } from "./exportstatusenum";



// ExportInfo
/** 
 * Information regarding the export status of discovered data. The value is an array of objects.
**/
export class ExportInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configurationsDownloadUrl" })
  configurationsDownloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=exportId" })
  exportId: string;

  @SpeakeasyMetadata({ data: "json, name=exportRequestTime" })
  exportRequestTime: Date;

  @SpeakeasyMetadata({ data: "json, name=exportStatus" })
  exportStatus: ExportStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=isTruncated" })
  isTruncated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=requestedEndTime" })
  requestedEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=requestedStartTime" })
  requestedStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage: string;
}
