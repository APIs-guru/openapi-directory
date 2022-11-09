import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActionContext
/** 
 * Represents the context of an action in the stage of a pipeline to a job worker.
**/
export class ActionContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionExecutionId" })
  actionExecutionId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
