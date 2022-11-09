import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetThirdPartyJobDetailsInput
/** 
 * Represents the input of a <code>GetThirdPartyJobDetails</code> action.
**/
export class GetThirdPartyJobDetailsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=jobId" })
  jobId: string;
}
