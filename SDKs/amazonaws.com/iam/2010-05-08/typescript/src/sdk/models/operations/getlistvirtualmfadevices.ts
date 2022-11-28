import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetListVirtualMfaDevicesActionEnum {
    ListVirtualMfaDevices = "ListVirtualMFADevices"
}

export enum GetListVirtualMfaDevicesAssignmentStatusEnum {
    Assigned = "Assigned",
    Unassigned = "Unassigned",
    Any = "Any"
}

export enum GetListVirtualMfaDevicesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetListVirtualMfaDevicesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListVirtualMfaDevicesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AssignmentStatus" })
  assignmentStatus?: GetListVirtualMfaDevicesAssignmentStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxItems" })
  maxItems?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListVirtualMfaDevicesVersionEnum;
}


export class GetListVirtualMfaDevicesHeaders extends SpeakeasyBase {
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


export class GetListVirtualMfaDevicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetListVirtualMfaDevicesQueryParams;

  @SpeakeasyMetadata()
  headers: GetListVirtualMfaDevicesHeaders;
}


export class GetListVirtualMfaDevicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
