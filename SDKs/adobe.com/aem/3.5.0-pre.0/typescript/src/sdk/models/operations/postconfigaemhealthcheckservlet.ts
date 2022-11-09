import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostConfigAemHealthCheckServletQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=bundles.ignored" })
  bundlesIgnored?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=bundles.ignored@TypeHint" })
  bundlesIgnoredAtTypeHint?: string;
}


export class PostConfigAemHealthCheckServletRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostConfigAemHealthCheckServletQueryParams;
}


export class PostConfigAemHealthCheckServletResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
