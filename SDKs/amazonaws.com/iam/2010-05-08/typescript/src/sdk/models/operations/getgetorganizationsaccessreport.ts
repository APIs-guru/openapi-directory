import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetOrganizationsAccessReportActionEnum {
    GetOrganizationsAccessReport = "GetOrganizationsAccessReport"
}

export enum GetGetOrganizationsAccessReportSortKeyEnum {
    ServiceNamespaceAscending = "SERVICE_NAMESPACE_ASCENDING"
,    ServiceNamespaceDescending = "SERVICE_NAMESPACE_DESCENDING"
,    LastAuthenticatedTimeAscending = "LAST_AUTHENTICATED_TIME_ASCENDING"
,    LastAuthenticatedTimeDescending = "LAST_AUTHENTICATED_TIME_DESCENDING"
}

export enum GetGetOrganizationsAccessReportVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetGetOrganizationsAccessReportQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetOrganizationsAccessReportActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=JobId" })
  jobId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" })
  maxItems?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SortKey" })
  sortKey?: GetGetOrganizationsAccessReportSortKeyEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetOrganizationsAccessReportVersionEnum;
}


export class GetGetOrganizationsAccessReportHeaders extends SpeakeasyBase {
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


export class GetGetOrganizationsAccessReportRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetOrganizationsAccessReportQueryParams;

  @Metadata()
  headers: GetGetOrganizationsAccessReportHeaders;
}


export class GetGetOrganizationsAccessReportResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
