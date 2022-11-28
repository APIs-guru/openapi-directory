import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetServiceLinkedRoleDeletionStatusActionEnum {
    GetServiceLinkedRoleDeletionStatus = "GetServiceLinkedRoleDeletionStatus"
}
export declare enum PostGetServiceLinkedRoleDeletionStatusVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostGetServiceLinkedRoleDeletionStatusQueryParams extends SpeakeasyBase {
    action: PostGetServiceLinkedRoleDeletionStatusActionEnum;
    version: PostGetServiceLinkedRoleDeletionStatusVersionEnum;
}
export declare class PostGetServiceLinkedRoleDeletionStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetServiceLinkedRoleDeletionStatusRequest extends SpeakeasyBase {
    queryParams: PostGetServiceLinkedRoleDeletionStatusQueryParams;
    headers: PostGetServiceLinkedRoleDeletionStatusHeaders;
    request?: Uint8Array;
}
export declare class PostGetServiceLinkedRoleDeletionStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
