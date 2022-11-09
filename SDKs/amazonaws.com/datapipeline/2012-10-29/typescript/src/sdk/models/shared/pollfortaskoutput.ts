import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaskObject } from "./taskobject";


// PollForTaskOutput
/** 
 * Contains the output of PollForTask.
**/
export class PollForTaskOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=taskObject" })
  taskObject?: TaskObject;
}
