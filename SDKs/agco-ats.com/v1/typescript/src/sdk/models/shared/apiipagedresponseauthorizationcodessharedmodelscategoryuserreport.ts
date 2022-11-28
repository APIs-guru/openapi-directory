import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationCodesSharedModelsCategoryUserReport } from "./authorizationcodessharedmodelscategoryuserreport";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



export class ApiIPagedResponseAuthorizationCodesSharedModelsCategoryUserReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: AuthorizationCodesSharedModelsCategoryUserReport })
  entities?: AuthorizationCodesSharedModelsCategoryUserReport[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata?: ApiPagedResponseMetadata;
}
