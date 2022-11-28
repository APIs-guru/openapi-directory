import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostConfigApacheSlingDavExServletQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alias" })
  alias?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alias@TypeHint" })
  aliasAtTypeHint?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dav.create-absolute-uri" })
  davCreateAbsoluteUri?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dav.create-absolute-uri@TypeHint" })
  davCreateAbsoluteUriAtTypeHint?: string;
}


export class PostConfigApacheSlingDavExServletRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostConfigApacheSlingDavExServletQueryParams;
}


export class PostConfigApacheSlingDavExServletResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
