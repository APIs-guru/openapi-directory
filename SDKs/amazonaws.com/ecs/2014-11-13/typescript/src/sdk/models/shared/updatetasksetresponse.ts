import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaskSet } from "./taskset";


export class UpdateTaskSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=taskSet" })
  taskSet?: TaskSet;
}
