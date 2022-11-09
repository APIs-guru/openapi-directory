import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionRevision } from "./actionrevision";


// PutActionRevisionInput
/** 
 * Represents the input of a <code>PutActionRevision</code> action.
**/
export class PutActionRevisionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionName" })
  actionName: string;

  @Metadata({ data: "json, name=actionRevision" })
  actionRevision: ActionRevision;

  @Metadata({ data: "json, name=pipelineName" })
  pipelineName: string;

  @Metadata({ data: "json, name=stageName" })
  stageName: string;
}
