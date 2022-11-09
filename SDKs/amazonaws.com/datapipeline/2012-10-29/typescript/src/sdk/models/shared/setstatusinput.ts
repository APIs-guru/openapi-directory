import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SetStatusInput
/** 
 * Contains the parameters for SetStatus.
**/
export class SetStatusInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectIds" })
  objectIds: string[];

  @Metadata({ data: "json, name=pipelineId" })
  pipelineId: string;

  @Metadata({ data: "json, name=status" })
  status: string;
}
