import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportToS3Task } from "./exporttos3task";
import { InstanceExportDetails } from "./instanceexportdetails";
import { ExportTaskStateEnum } from "./exporttaskstateenum";
import { Tag } from "./tag";



// ExportTask
/** 
 * Describes an export instance task.
**/
export class ExportTask extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  exportTaskId?: string;

  @SpeakeasyMetadata()
  exportToS3Task?: ExportToS3Task;

  @SpeakeasyMetadata()
  instanceExportDetails?: InstanceExportDetails;

  @SpeakeasyMetadata()
  state?: ExportTaskStateEnum;

  @SpeakeasyMetadata()
  statusMessage?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
