import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostResetSnapshotAttributeActionEnum {
    ResetSnapshotAttribute = "ResetSnapshotAttribute"
}
export declare enum PostResetSnapshotAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostResetSnapshotAttributeQueryParams extends SpeakeasyBase {
    action: PostResetSnapshotAttributeActionEnum;
    version: PostResetSnapshotAttributeVersionEnum;
}
export declare class PostResetSnapshotAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostResetSnapshotAttributeRequest extends SpeakeasyBase {
    queryParams: PostResetSnapshotAttributeQueryParams;
    headers: PostResetSnapshotAttributeHeaders;
    request?: Uint8Array;
}
export declare class PostResetSnapshotAttributeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
