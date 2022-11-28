import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostSetPasswordQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=old" })
  old: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=plain" })
  plain: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=verify" })
  verify: string;
}


export class PostSetPasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostSetPasswordQueryParams;
}


export class PostSetPasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postSetPasswordDefaultTextPlainString?: string;
}
