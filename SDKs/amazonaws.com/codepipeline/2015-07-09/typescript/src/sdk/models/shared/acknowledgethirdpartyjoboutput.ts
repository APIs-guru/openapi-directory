import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";



// AcknowledgeThirdPartyJobOutput
/** 
 * Represents the output of an AcknowledgeThirdPartyJob action.
**/
export class AcknowledgeThirdPartyJobOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: JobStatusEnum;
}
