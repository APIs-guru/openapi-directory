import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskSet } from "./taskset";



export class UpdateTaskSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taskSet" })
  taskSet?: TaskSet;
}
