import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationCodesSharedModelsAuthorizationCode } from "./authorizationcodessharedmodelsauthorizationcode";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



export class ApiIPagedResponseAuthorizationCodesSharedModelsAuthorizationCode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: AuthorizationCodesSharedModelsAuthorizationCode })
  entities?: AuthorizationCodesSharedModelsAuthorizationCode[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata?: ApiPagedResponseMetadata;
}
