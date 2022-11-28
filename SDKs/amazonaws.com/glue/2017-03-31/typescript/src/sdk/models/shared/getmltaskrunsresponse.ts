import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskRun } from "./taskrun";



export class GetMlTaskRunsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TaskRuns", elemType: TaskRun })
  taskRuns?: TaskRun[];
}
