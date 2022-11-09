import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthorizationData } from "./authorizationdata";


export class GetAuthorizationTokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizationData" })
  authorizationData?: AuthorizationData;
}
