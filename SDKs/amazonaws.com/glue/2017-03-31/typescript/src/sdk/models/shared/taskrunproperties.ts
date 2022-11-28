import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportLabelsTaskRunProperties } from "./exportlabelstaskrunproperties";
import { FindMatchesTaskRunProperties } from "./findmatchestaskrunproperties";
import { ImportLabelsTaskRunProperties } from "./importlabelstaskrunproperties";
import { LabelingSetGenerationTaskRunProperties } from "./labelingsetgenerationtaskrunproperties";
import { TaskTypeEnum } from "./tasktypeenum";



// TaskRunProperties
/** 
 * The configuration properties for the task run.
**/
export class TaskRunProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExportLabelsTaskRunProperties" })
  exportLabelsTaskRunProperties?: ExportLabelsTaskRunProperties;

  @SpeakeasyMetadata({ data: "json, name=FindMatchesTaskRunProperties" })
  findMatchesTaskRunProperties?: FindMatchesTaskRunProperties;

  @SpeakeasyMetadata({ data: "json, name=ImportLabelsTaskRunProperties" })
  importLabelsTaskRunProperties?: ImportLabelsTaskRunProperties;

  @SpeakeasyMetadata({ data: "json, name=LabelingSetGenerationTaskRunProperties" })
  labelingSetGenerationTaskRunProperties?: LabelingSetGenerationTaskRunProperties;

  @SpeakeasyMetadata({ data: "json, name=TaskType" })
  taskType?: TaskTypeEnum;
}
