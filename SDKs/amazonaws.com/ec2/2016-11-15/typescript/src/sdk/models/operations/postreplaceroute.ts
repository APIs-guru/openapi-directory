import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostReplaceRouteActionEnum {
    ReplaceRoute = "ReplaceRoute"
}

export enum PostReplaceRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostReplaceRouteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostReplaceRouteActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostReplaceRouteVersionEnum;
}


export class PostReplaceRouteHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class PostReplaceRouteRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostReplaceRouteQueryParams;

  @Metadata()
  headers: PostReplaceRouteHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostReplaceRouteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
