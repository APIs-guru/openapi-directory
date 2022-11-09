import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostGetAccountSummaryActionEnum {
    GetAccountSummary = "GetAccountSummary"
}

export enum PostGetAccountSummaryVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class PostGetAccountSummaryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGetAccountSummaryActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGetAccountSummaryVersionEnum;
}


export class PostGetAccountSummaryHeaders extends SpeakeasyBase {
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


export class PostGetAccountSummaryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostGetAccountSummaryQueryParams;

  @Metadata()
  headers: PostGetAccountSummaryHeaders;
}


export class PostGetAccountSummaryResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
