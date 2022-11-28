import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PutActionRevisionOutput
/** 
 * Represents the output of a <code>PutActionRevision</code> action.
**/
export class PutActionRevisionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=newRevision" })
  newRevision?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pipelineExecutionId" })
  pipelineExecutionId?: string;
}
