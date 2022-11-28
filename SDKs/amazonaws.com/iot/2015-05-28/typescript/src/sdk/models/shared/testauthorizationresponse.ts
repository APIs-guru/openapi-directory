import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthResult } from "./authresult";



export class TestAuthorizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authResults", elemType: AuthResult })
  authResults?: AuthResult[];
}
