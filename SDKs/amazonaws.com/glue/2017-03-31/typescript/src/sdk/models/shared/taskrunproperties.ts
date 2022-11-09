import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=ExportLabelsTaskRunProperties" })
  exportLabelsTaskRunProperties?: ExportLabelsTaskRunProperties;

  @Metadata({ data: "json, name=FindMatchesTaskRunProperties" })
  findMatchesTaskRunProperties?: FindMatchesTaskRunProperties;

  @Metadata({ data: "json, name=ImportLabelsTaskRunProperties" })
  importLabelsTaskRunProperties?: ImportLabelsTaskRunProperties;

  @Metadata({ data: "json, name=LabelingSetGenerationTaskRunProperties" })
  labelingSetGenerationTaskRunProperties?: LabelingSetGenerationTaskRunProperties;

  @Metadata({ data: "json, name=TaskType" })
  taskType?: TaskTypeEnum;
}
