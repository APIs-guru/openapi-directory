import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BuildSystemSharedDtoAgentStatus
/** 
 * A DTO for an IAgentStatus
**/
export class BuildSystemSharedDtoAgentStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LastStatusUpdate, form, name=LastStatusUpdate;" })
  lastStatusUpdate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Online, form, name=Online;" })
  online: boolean;
}
