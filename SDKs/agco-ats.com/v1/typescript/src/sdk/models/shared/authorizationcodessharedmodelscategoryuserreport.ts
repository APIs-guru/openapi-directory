import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuthorizationCodesSharedModelsCategory } from "./authorizationcodessharedmodelscategory";
import { AuthorizationCodesSharedModelsAuthorizationCodeUser } from "./authorizationcodessharedmodelsauthorizationcodeuser";


export class AuthorizationCodesSharedModelsCategoryUserReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=Categories", elemType: shared.AuthorizationCodesSharedModelsCategory })
  categories?: AuthorizationCodesSharedModelsCategory[];

  @Metadata({ data: "json, name=User" })
  user?: AuthorizationCodesSharedModelsAuthorizationCodeUser;
}
