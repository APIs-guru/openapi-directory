import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDeleteRouteActionEnum {
    DeleteRoute = "DeleteRoute"
}

export enum PostDeleteRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostDeleteRouteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDeleteRouteActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDeleteRouteVersionEnum;
}


export class PostDeleteRouteHeaders extends SpeakeasyBase {
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


export class PostDeleteRouteRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDeleteRouteQueryParams;

  @Metadata()
  headers: PostDeleteRouteHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDeleteRouteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
