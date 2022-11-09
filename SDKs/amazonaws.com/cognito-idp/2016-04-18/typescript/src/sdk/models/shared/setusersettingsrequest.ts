import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MfaOptionType } from "./mfaoptiontype";


// SetUserSettingsRequest
/** 
 * Represents the request to set user settings.
**/
export class SetUserSettingsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessToken" })
  accessToken: string;

  @Metadata({ data: "json, name=MFAOptions", elemType: shared.MfaOptionType })
  mfaOptions: MfaOptionType[];
}
