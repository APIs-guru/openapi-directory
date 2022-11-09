import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TaskRun } from "./taskrun";


export class GetMlTaskRunsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=TaskRuns", elemType: shared.TaskRun })
  taskRuns?: TaskRun[];
}
