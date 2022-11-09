import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuthorizationData } from "./authorizationdata";


export class GetAuthorizationTokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizationData", elemType: shared.AuthorizationData })
  authorizationData?: AuthorizationData[];
}
