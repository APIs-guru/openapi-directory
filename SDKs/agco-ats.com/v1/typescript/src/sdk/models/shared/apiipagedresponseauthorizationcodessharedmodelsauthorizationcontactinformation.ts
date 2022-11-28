import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationCodesSharedModelsAuthorizationContactInformation } from "./authorizationcodessharedmodelsauthorizationcontactinformation";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



export class ApiIPagedResponseAuthorizationCodesSharedModelsAuthorizationContactInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: AuthorizationCodesSharedModelsAuthorizationContactInformation })
  entities?: AuthorizationCodesSharedModelsAuthorizationContactInformation[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata?: ApiPagedResponseMetadata;
}
