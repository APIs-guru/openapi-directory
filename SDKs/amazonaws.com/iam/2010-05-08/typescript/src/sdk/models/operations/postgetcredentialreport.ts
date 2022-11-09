import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostGetCredentialReportActionEnum {
    GetCredentialReport = "GetCredentialReport"
}

export enum PostGetCredentialReportVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class PostGetCredentialReportQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGetCredentialReportActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGetCredentialReportVersionEnum;
}


export class PostGetCredentialReportHeaders extends SpeakeasyBase {
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


export class PostGetCredentialReportRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostGetCredentialReportQueryParams;

  @Metadata()
  headers: PostGetCredentialReportHeaders;
}


export class PostGetCredentialReportResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
