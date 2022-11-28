import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AcknowledgeJobInput
/** 
 * Represents the input of an AcknowledgeJob action.
**/
export class AcknowledgeJobInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "json, name=nonce" })
  nonce: string;
}
