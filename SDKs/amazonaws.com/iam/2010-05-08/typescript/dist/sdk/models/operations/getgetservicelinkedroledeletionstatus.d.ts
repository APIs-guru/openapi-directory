import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetServiceLinkedRoleDeletionStatusActionEnum {
    GetServiceLinkedRoleDeletionStatus = "GetServiceLinkedRoleDeletionStatus"
}
export declare enum GetGetServiceLinkedRoleDeletionStatusVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetGetServiceLinkedRoleDeletionStatusQueryParams extends SpeakeasyBase {
    action: GetGetServiceLinkedRoleDeletionStatusActionEnum;
    deletionTaskId: string;
    version: GetGetServiceLinkedRoleDeletionStatusVersionEnum;
}
export declare class GetGetServiceLinkedRoleDeletionStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetServiceLinkedRoleDeletionStatusRequest extends SpeakeasyBase {
    queryParams: GetGetServiceLinkedRoleDeletionStatusQueryParams;
    headers: GetGetServiceLinkedRoleDeletionStatusHeaders;
}
export declare class GetGetServiceLinkedRoleDeletionStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
