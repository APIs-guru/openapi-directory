import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostConfigAemPasswordResetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=pwdreset.authorizables" })
  pwdresetAuthorizables?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=pwdreset.authorizables@TypeHint" })
  pwdresetAuthorizablesAtTypeHint?: string;
}


export class PostConfigAemPasswordResetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostConfigAemPasswordResetQueryParams;
}


export class PostConfigAemPasswordResetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
