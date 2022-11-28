import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostConfigAemPasswordResetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pwdreset.authorizables" })
  pwdresetAuthorizables?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pwdreset.authorizables@TypeHint" })
  pwdresetAuthorizablesAtTypeHint?: string;
}


export class PostConfigAemPasswordResetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostConfigAemPasswordResetQueryParams;
}


export class PostConfigAemPasswordResetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
