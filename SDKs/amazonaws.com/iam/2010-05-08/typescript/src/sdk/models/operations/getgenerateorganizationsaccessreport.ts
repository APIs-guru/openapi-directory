import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGenerateOrganizationsAccessReportActionEnum {
    GenerateOrganizationsAccessReport = "GenerateOrganizationsAccessReport"
}

export enum GetGenerateOrganizationsAccessReportVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetGenerateOrganizationsAccessReportQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGenerateOrganizationsAccessReportActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EntityPath" })
  entityPath: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OrganizationsPolicyId" })
  organizationsPolicyId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGenerateOrganizationsAccessReportVersionEnum;
}


export class GetGenerateOrganizationsAccessReportHeaders extends SpeakeasyBase {
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


export class GetGenerateOrganizationsAccessReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGenerateOrganizationsAccessReportQueryParams;

  @SpeakeasyMetadata()
  headers: GetGenerateOrganizationsAccessReportHeaders;
}


export class GetGenerateOrganizationsAccessReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
