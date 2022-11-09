import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDeleteDhcpOptionsActionEnum {
    DeleteDhcpOptions = "DeleteDhcpOptions"
}

export enum PostDeleteDhcpOptionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostDeleteDhcpOptionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDeleteDhcpOptionsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDeleteDhcpOptionsVersionEnum;
}


export class PostDeleteDhcpOptionsHeaders extends SpeakeasyBase {
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


export class PostDeleteDhcpOptionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDeleteDhcpOptionsQueryParams;

  @Metadata()
  headers: PostDeleteDhcpOptionsHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDeleteDhcpOptionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
