import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationCodesSharedModelsAuthorizationCodeDefinition } from "./authorizationcodessharedmodelsauthorizationcodedefinition";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



export class ApiIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: AuthorizationCodesSharedModelsAuthorizationCodeDefinition })
  entities?: AuthorizationCodesSharedModelsAuthorizationCodeDefinition[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata?: ApiPagedResponseMetadata;
}
