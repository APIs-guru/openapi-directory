import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuthorizationCodesSharedModelsAuthorizationCode } from "./authorizationcodessharedmodelsauthorizationcode";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


export class ApiIPagedResponseAuthorizationCodesSharedModelsAuthorizationCode extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.AuthorizationCodesSharedModelsAuthorizationCode })
  entities?: AuthorizationCodesSharedModelsAuthorizationCode[];

  @Metadata({ data: "json, name=Metadata" })
  metadata?: ApiPagedResponseMetadata;
}
