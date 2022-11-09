import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGenerateOrganizationsAccessReportActionEnum {
    GenerateOrganizationsAccessReport = "GenerateOrganizationsAccessReport"
}

export enum GetGenerateOrganizationsAccessReportVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetGenerateOrganizationsAccessReportQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGenerateOrganizationsAccessReportActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EntityPath" })
  entityPath: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=OrganizationsPolicyId" })
  organizationsPolicyId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGenerateOrganizationsAccessReportVersionEnum;
}


export class GetGenerateOrganizationsAccessReportHeaders extends SpeakeasyBase {
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


export class GetGenerateOrganizationsAccessReportRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGenerateOrganizationsAccessReportQueryParams;

  @Metadata()
  headers: GetGenerateOrganizationsAccessReportHeaders;
}


export class GetGenerateOrganizationsAccessReportResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
