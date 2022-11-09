import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostGenerateCredentialReportActionEnum {
    GenerateCredentialReport = "GenerateCredentialReport"
}

export enum PostGenerateCredentialReportVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class PostGenerateCredentialReportQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGenerateCredentialReportActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGenerateCredentialReportVersionEnum;
}


export class PostGenerateCredentialReportHeaders extends SpeakeasyBase {
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


export class PostGenerateCredentialReportRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostGenerateCredentialReportQueryParams;

  @Metadata()
  headers: PostGenerateCredentialReportHeaders;
}


export class PostGenerateCredentialReportResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
