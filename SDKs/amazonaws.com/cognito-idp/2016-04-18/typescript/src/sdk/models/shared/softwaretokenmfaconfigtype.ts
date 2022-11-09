import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SoftwareTokenMfaConfigType
/** 
 * The type used for enabling software token MFA at the user pool level.
**/
export class SoftwareTokenMfaConfigType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;
}
