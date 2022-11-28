import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationData } from "./authorizationdata";



export class GetAuthorizationTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizationData" })
  authorizationData?: AuthorizationData;
}
