import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobStatusEnum } from "./jobstatusenum";


// AcknowledgeThirdPartyJobOutput
/** 
 * Represents the output of an AcknowledgeThirdPartyJob action.
**/
export class AcknowledgeThirdPartyJobOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: JobStatusEnum;
}
