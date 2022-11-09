import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostGetServiceLastAccessedDetailsActionEnum {
    GetServiceLastAccessedDetails = "GetServiceLastAccessedDetails"
}

export enum PostGetServiceLastAccessedDetailsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class PostGetServiceLastAccessedDetailsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGetServiceLastAccessedDetailsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGetServiceLastAccessedDetailsVersionEnum;
}


export class PostGetServiceLastAccessedDetailsHeaders extends SpeakeasyBase {
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


export class PostGetServiceLastAccessedDetailsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostGetServiceLastAccessedDetailsQueryParams;

  @Metadata()
  headers: PostGetServiceLastAccessedDetailsHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostGetServiceLastAccessedDetailsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
