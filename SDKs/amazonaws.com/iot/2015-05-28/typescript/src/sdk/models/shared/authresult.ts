import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Allowed } from "./allowed";
import { AuthDecisionEnum } from "./authdecisionenum";
import { AuthInfo } from "./authinfo";
import { Denied } from "./denied";



// AuthResult
/** 
 * The authorizer result.
**/
export class AuthResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed" })
  allowed?: Allowed;

  @SpeakeasyMetadata({ data: "json, name=authDecision" })
  authDecision?: AuthDecisionEnum;

  @SpeakeasyMetadata({ data: "json, name=authInfo" })
  authInfo?: AuthInfo;

  @SpeakeasyMetadata({ data: "json, name=denied" })
  denied?: Denied;

  @SpeakeasyMetadata({ data: "json, name=missingContextValues" })
  missingContextValues?: string[];
}
