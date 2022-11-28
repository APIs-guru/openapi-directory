import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationCodesSharedModelsCategory } from "./authorizationcodessharedmodelscategory";
import { AuthorizationCodesSharedModelsAuthorizationCodeUser } from "./authorizationcodessharedmodelsauthorizationcodeuser";



export class AuthorizationCodesSharedModelsCategoryUserReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Categories", elemType: AuthorizationCodesSharedModelsCategory })
  categories?: AuthorizationCodesSharedModelsCategory[];

  @SpeakeasyMetadata({ data: "json, name=User" })
  user?: AuthorizationCodesSharedModelsAuthorizationCodeUser;
}
