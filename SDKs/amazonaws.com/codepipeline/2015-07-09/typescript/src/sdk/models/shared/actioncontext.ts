import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActionContext
/** 
 * Represents the context of an action in the stage of a pipeline to a job worker.
**/
export class ActionContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionExecutionId" })
  actionExecutionId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
