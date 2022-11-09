import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuthorizationCodesSharedModelsAuthorizationCodeDefinition } from "./authorizationcodessharedmodelsauthorizationcodedefinition";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


export class ApiIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.AuthorizationCodesSharedModelsAuthorizationCodeDefinition })
  entities?: AuthorizationCodesSharedModelsAuthorizationCodeDefinition[];

  @Metadata({ data: "json, name=Metadata" })
  metadata?: ApiPagedResponseMetadata;
}
