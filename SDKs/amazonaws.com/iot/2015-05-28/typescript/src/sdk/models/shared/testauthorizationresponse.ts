import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuthResult } from "./authresult";


export class TestAuthorizationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=authResults", elemType: shared.AuthResult })
  authResults?: AuthResult[];
}
