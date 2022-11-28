import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetOrganizationsAccessReportActionEnum {
    GetOrganizationsAccessReport = "GetOrganizationsAccessReport"
}

export enum GetGetOrganizationsAccessReportSortKeyEnum {
    ServiceNamespaceAscending = "SERVICE_NAMESPACE_ASCENDING",
    ServiceNamespaceDescending = "SERVICE_NAMESPACE_DESCENDING",
    LastAuthenticatedTimeAscending = "LAST_AUTHENTICATED_TIME_ASCENDING",
    LastAuthenticatedTimeDescending = "LAST_AUTHENTICATED_TIME_DESCENDING"
}

export enum GetGetOrganizationsAccessReportVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetGetOrganizationsAccessReportQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetOrganizationsAccessReportActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=JobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxItems" })
  maxItems?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SortKey" })
  sortKey?: GetGetOrganizationsAccessReportSortKeyEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetOrganizationsAccessReportVersionEnum;
}


export class GetGetOrganizationsAccessReportHeaders extends SpeakeasyBase {
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


export class GetGetOrganizationsAccessReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetOrganizationsAccessReportQueryParams;

  @SpeakeasyMetadata()
  headers: GetGetOrganizationsAccessReportHeaders;
}


export class GetGetOrganizationsAccessReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
