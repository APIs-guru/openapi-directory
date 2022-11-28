import { SpeakeasyBase } from "../../../internal/utils";
import { ExportLabelsTaskRunProperties } from "./exportlabelstaskrunproperties";
import { FindMatchesTaskRunProperties } from "./findmatchestaskrunproperties";
import { ImportLabelsTaskRunProperties } from "./importlabelstaskrunproperties";
import { LabelingSetGenerationTaskRunProperties } from "./labelingsetgenerationtaskrunproperties";
import { TaskTypeEnum } from "./tasktypeenum";
/**
 * The configuration properties for the task run.
**/
export declare class TaskRunProperties extends SpeakeasyBase {
    exportLabelsTaskRunProperties?: ExportLabelsTaskRunProperties;
    findMatchesTaskRunProperties?: FindMatchesTaskRunProperties;
    importLabelsTaskRunProperties?: ImportLabelsTaskRunProperties;
    labelingSetGenerationTaskRunProperties?: LabelingSetGenerationTaskRunProperties;
    taskType?: TaskTypeEnum;
}
