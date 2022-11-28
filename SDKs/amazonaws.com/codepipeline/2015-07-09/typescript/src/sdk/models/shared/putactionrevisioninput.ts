import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionRevision } from "./actionrevision";



// PutActionRevisionInput
/** 
 * Represents the input of a <code>PutActionRevision</code> action.
**/
export class PutActionRevisionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionName" })
  actionName: string;

  @SpeakeasyMetadata({ data: "json, name=actionRevision" })
  actionRevision: ActionRevision;

  @SpeakeasyMetadata({ data: "json, name=pipelineName" })
  pipelineName: string;

  @SpeakeasyMetadata({ data: "json, name=stageName" })
  stageName: string;
}
