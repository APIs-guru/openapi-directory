import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuthorizationCodesSharedModelsAuthorizationContactInformation } from "./authorizationcodessharedmodelsauthorizationcontactinformation";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


export class ApiIPagedResponseAuthorizationCodesSharedModelsAuthorizationContactInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.AuthorizationCodesSharedModelsAuthorizationContactInformation })
  entities?: AuthorizationCodesSharedModelsAuthorizationContactInformation[];

  @Metadata({ data: "json, name=Metadata" })
  metadata?: ApiPagedResponseMetadata;
}
