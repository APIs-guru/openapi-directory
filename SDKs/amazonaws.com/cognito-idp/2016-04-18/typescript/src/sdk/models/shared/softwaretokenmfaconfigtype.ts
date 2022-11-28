import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SoftwareTokenMfaConfigType
/** 
 * The type used for enabling software token MFA at the user pool level.
**/
export class SoftwareTokenMfaConfigType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;
}
