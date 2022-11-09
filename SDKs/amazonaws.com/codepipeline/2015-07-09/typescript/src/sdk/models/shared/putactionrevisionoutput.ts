import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PutActionRevisionOutput
/** 
 * Represents the output of a <code>PutActionRevision</code> action.
**/
export class PutActionRevisionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=newRevision" })
  newRevision?: boolean;

  @Metadata({ data: "json, name=pipelineExecutionId" })
  pipelineExecutionId?: string;
}
