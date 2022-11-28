import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostGetServiceLastAccessedDetailsActionEnum {
    GetServiceLastAccessedDetails = "GetServiceLastAccessedDetails"
}

export enum PostGetServiceLastAccessedDetailsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class PostGetServiceLastAccessedDetailsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGetServiceLastAccessedDetailsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGetServiceLastAccessedDetailsVersionEnum;
}


export class PostGetServiceLastAccessedDetailsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class PostGetServiceLastAccessedDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostGetServiceLastAccessedDetailsQueryParams;

  @SpeakeasyMetadata()
  headers: PostGetServiceLastAccessedDetailsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostGetServiceLastAccessedDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
