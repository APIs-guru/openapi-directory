import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostConfigApacheSlingDavExServletQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alias" })
  alias?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alias@TypeHint" })
  aliasAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dav.create-absolute-uri" })
  davCreateAbsoluteUri?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dav.create-absolute-uri@TypeHint" })
  davCreateAbsoluteUriAtTypeHint?: string;
}


export class PostConfigApacheSlingDavExServletRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostConfigApacheSlingDavExServletQueryParams;
}


export class PostConfigApacheSlingDavExServletResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
