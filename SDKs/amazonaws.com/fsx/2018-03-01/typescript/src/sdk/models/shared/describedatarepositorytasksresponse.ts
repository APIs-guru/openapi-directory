import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataRepositoryTask } from "./datarepositorytask";



export class DescribeDataRepositoryTasksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataRepositoryTasks", elemType: DataRepositoryTask })
  dataRepositoryTasks?: DataRepositoryTask[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
