import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostSetPasswordQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=old" })
  old: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=plain" })
  plain: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=verify" })
  verify: string;
}


export class PostSetPasswordRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostSetPasswordQueryParams;
}


export class PostSetPasswordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  postSetPasswordDefaultTextPlainString?: string;
}
