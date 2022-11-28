import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionRevision } from "./actionrevision";
import { ActionExecution } from "./actionexecution";



// ActionState
/** 
 * Represents information about the state of an action.
**/
export class ActionState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionName" })
  actionName?: string;

  @SpeakeasyMetadata({ data: "json, name=currentRevision" })
  currentRevision?: ActionRevision;

  @SpeakeasyMetadata({ data: "json, name=entityUrl" })
  entityUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=latestExecution" })
  latestExecution?: ActionExecution;

  @SpeakeasyMetadata({ data: "json, name=revisionUrl" })
  revisionUrl?: string;
}
