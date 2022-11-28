import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostConfigAemHealthCheckServletQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bundles.ignored" })
  bundlesIgnored?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bundles.ignored@TypeHint" })
  bundlesIgnoredAtTypeHint?: string;
}


export class PostConfigAemHealthCheckServletRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostConfigAemHealthCheckServletQueryParams;
}


export class PostConfigAemHealthCheckServletResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
