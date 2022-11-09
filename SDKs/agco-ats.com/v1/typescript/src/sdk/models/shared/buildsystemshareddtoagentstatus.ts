import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BuildSystemSharedDtoAgentStatus
/** 
 * A DTO for an IAgentStatus
**/
export class BuildSystemSharedDtoAgentStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=LastStatusUpdate, form, name=LastStatusUpdate;" })
  lastStatusUpdate?: Date;

  @Metadata({ data: "json, name=Online, form, name=Online;" })
  online: boolean;
}
