import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SetStatusInput
/** 
 * Contains the parameters for SetStatus.
**/
export class SetStatusInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectIds" })
  objectIds: string[];

  @SpeakeasyMetadata({ data: "json, name=pipelineId" })
  pipelineId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;
}
