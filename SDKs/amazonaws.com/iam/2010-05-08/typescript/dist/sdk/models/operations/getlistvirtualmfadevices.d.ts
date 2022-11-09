import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetListVirtualMfaDevicesActionEnum {
    ListVirtualMfaDevices = "ListVirtualMFADevices"
}
export declare enum GetListVirtualMfaDevicesAssignmentStatusEnum {
    Assigned = "Assigned",
    Unassigned = "Unassigned",
    Any = "Any"
}
export declare enum GetListVirtualMfaDevicesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListVirtualMfaDevicesQueryParams extends SpeakeasyBase {
    action: GetListVirtualMfaDevicesActionEnum;
    assignmentStatus?: GetListVirtualMfaDevicesAssignmentStatusEnum;
    marker?: string;
    maxItems?: number;
    version: GetListVirtualMfaDevicesVersionEnum;
}
export declare class GetListVirtualMfaDevicesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListVirtualMfaDevicesRequest extends SpeakeasyBase {
    queryParams: GetListVirtualMfaDevicesQueryParams;
    headers: GetListVirtualMfaDevicesHeaders;
}
export declare class GetListVirtualMfaDevicesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
