import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Allowed } from "./allowed";
import { AuthDecisionEnum } from "./authdecisionenum";
import { AuthInfo } from "./authinfo";
import { Denied } from "./denied";


// AuthResult
/** 
 * The authorizer result.
**/
export class AuthResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowed" })
  allowed?: Allowed;

  @Metadata({ data: "json, name=authDecision" })
  authDecision?: AuthDecisionEnum;

  @Metadata({ data: "json, name=authInfo" })
  authInfo?: AuthInfo;

  @Metadata({ data: "json, name=denied" })
  denied?: Denied;

  @Metadata({ data: "json, name=missingContextValues" })
  missingContextValues?: string[];
}
