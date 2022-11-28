import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetThirdPartyJobDetailsInput
/** 
 * Represents the input of a <code>GetThirdPartyJobDetails</code> action.
**/
export class GetThirdPartyJobDetailsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken: string;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId: string;
}
