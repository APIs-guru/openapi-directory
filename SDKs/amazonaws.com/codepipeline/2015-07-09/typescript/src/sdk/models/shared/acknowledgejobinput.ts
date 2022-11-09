import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AcknowledgeJobInput
/** 
 * Represents the input of an AcknowledgeJob action.
**/
export class AcknowledgeJobInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobId" })
  jobId: string;

  @Metadata({ data: "json, name=nonce" })
  nonce: string;
}
