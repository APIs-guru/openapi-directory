import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionRevision } from "./actionrevision";
import { ActionExecution } from "./actionexecution";


// ActionState
/** 
 * Represents information about the state of an action.
**/
export class ActionState extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionName" })
  actionName?: string;

  @Metadata({ data: "json, name=currentRevision" })
  currentRevision?: ActionRevision;

  @Metadata({ data: "json, name=entityUrl" })
  entityUrl?: string;

  @Metadata({ data: "json, name=latestExecution" })
  latestExecution?: ActionExecution;

  @Metadata({ data: "json, name=revisionUrl" })
  revisionUrl?: string;
}
