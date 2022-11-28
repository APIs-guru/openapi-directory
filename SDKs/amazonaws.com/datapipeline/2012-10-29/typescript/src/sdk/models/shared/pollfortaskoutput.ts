import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskObject } from "./taskobject";



// PollForTaskOutput
/** 
 * Contains the output of PollForTask.
**/
export class PollForTaskOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taskObject" })
  taskObject?: TaskObject;
}
