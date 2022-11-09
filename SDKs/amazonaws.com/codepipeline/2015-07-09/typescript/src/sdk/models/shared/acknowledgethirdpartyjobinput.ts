import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AcknowledgeThirdPartyJobInput
/** 
 * Represents the input of an AcknowledgeThirdPartyJob action.
**/
export class AcknowledgeThirdPartyJobInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=jobId" })
  jobId: string;

  @Metadata({ data: "json, name=nonce" })
  nonce: string;
}
