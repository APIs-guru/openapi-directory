import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetListVirtualMfaDevicesActionEnum {
    ListVirtualMfaDevices = "ListVirtualMFADevices"
}

export enum GetListVirtualMfaDevicesAssignmentStatusEnum {
    Assigned = "Assigned"
,    Unassigned = "Unassigned"
,    Any = "Any"
}

export enum GetListVirtualMfaDevicesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetListVirtualMfaDevicesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListVirtualMfaDevicesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AssignmentStatus" })
  assignmentStatus?: GetListVirtualMfaDevicesAssignmentStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" })
  maxItems?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListVirtualMfaDevicesVersionEnum;
}


export class GetListVirtualMfaDevicesHeaders extends SpeakeasyBase {
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


export class GetListVirtualMfaDevicesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetListVirtualMfaDevicesQueryParams;

  @Metadata()
  headers: GetListVirtualMfaDevicesHeaders;
}


export class GetListVirtualMfaDevicesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
