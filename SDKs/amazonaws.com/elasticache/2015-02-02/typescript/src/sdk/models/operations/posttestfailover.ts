import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostTestFailoverActionEnum {
    TestFailover = "TestFailover"
}

export enum PostTestFailoverVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class PostTestFailoverQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostTestFailoverActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostTestFailoverVersionEnum;
}


export class PostTestFailoverHeaders extends SpeakeasyBase {
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


export class PostTestFailoverRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostTestFailoverQueryParams;

  @Metadata()
  headers: PostTestFailoverHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostTestFailoverResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
