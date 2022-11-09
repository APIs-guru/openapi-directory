import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuthorizationCodesSharedModelsCategory } from "./authorizationcodessharedmodelscategory";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


export class ApiIPagedResponseAuthorizationCodesSharedModelsCategory extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.AuthorizationCodesSharedModelsCategory })
  entities?: AuthorizationCodesSharedModelsCategory[];

  @Metadata({ data: "json, name=Metadata" })
  metadata?: ApiPagedResponseMetadata;
}
