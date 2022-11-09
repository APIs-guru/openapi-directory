import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuthorizationCodesSharedModelsCategoryUserReport } from "./authorizationcodessharedmodelscategoryuserreport";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


export class ApiIPagedResponseAuthorizationCodesSharedModelsCategoryUserReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.AuthorizationCodesSharedModelsCategoryUserReport })
  entities?: AuthorizationCodesSharedModelsCategoryUserReport[];

  @Metadata({ data: "json, name=Metadata" })
  metadata?: ApiPagedResponseMetadata;
}
