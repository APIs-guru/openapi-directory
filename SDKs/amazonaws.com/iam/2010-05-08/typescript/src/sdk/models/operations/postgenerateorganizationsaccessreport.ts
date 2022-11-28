import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostGenerateOrganizationsAccessReportActionEnum {
    GenerateOrganizationsAccessReport = "GenerateOrganizationsAccessReport"
}

export enum PostGenerateOrganizationsAccessReportVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class PostGenerateOrganizationsAccessReportQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGenerateOrganizationsAccessReportActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGenerateOrganizationsAccessReportVersionEnum;
}


export class PostGenerateOrganizationsAccessReportHeaders extends SpeakeasyBase {
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


export class PostGenerateOrganizationsAccessReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostGenerateOrganizationsAccessReportQueryParams;

  @SpeakeasyMetadata()
  headers: PostGenerateOrganizationsAccessReportHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostGenerateOrganizationsAccessReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
