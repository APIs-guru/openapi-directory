import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Failure } from "./failure";
import { Task } from "./task";


export class DescribeTasksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=failures", elemType: shared.Failure })
  failures?: Failure[];

  @Metadata({ data: "json, name=tasks", elemType: shared.Task })
  tasks?: Task[];
}
