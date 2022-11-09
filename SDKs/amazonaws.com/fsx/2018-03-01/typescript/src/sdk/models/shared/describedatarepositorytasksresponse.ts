import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataRepositoryTask } from "./datarepositorytask";


export class DescribeDataRepositoryTasksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataRepositoryTasks", elemType: shared.DataRepositoryTask })
  dataRepositoryTasks?: DataRepositoryTask[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
