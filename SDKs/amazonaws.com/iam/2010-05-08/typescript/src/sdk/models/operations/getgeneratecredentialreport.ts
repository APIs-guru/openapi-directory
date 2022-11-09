import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGenerateCredentialReportActionEnum {
    GenerateCredentialReport = "GenerateCredentialReport"
}

export enum GetGenerateCredentialReportVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetGenerateCredentialReportQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGenerateCredentialReportActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGenerateCredentialReportVersionEnum;
}


export class GetGenerateCredentialReportHeaders extends SpeakeasyBase {
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


export class GetGenerateCredentialReportRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGenerateCredentialReportQueryParams;

  @Metadata()
  headers: GetGenerateCredentialReportHeaders;
}


export class GetGenerateCredentialReportResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
