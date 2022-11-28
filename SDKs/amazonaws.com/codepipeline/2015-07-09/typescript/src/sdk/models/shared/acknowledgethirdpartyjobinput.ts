import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AcknowledgeThirdPartyJobInput
/** 
 * Represents the input of an AcknowledgeThirdPartyJob action.
**/
export class AcknowledgeThirdPartyJobInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken: string;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "json, name=nonce" })
  nonce: string;
}
