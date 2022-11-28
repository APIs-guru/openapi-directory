import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationCodesSharedModelsCategory } from "./authorizationcodessharedmodelscategory";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



export class ApiIPagedResponseAuthorizationCodesSharedModelsCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: AuthorizationCodesSharedModelsCategory })
  entities?: AuthorizationCodesSharedModelsCategory[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata?: ApiPagedResponseMetadata;
}
