import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteSnapshotActionEnum {
    DeleteSnapshot = "DeleteSnapshot"
}
export declare enum PostDeleteSnapshotVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteSnapshotQueryParams extends SpeakeasyBase {
    action: PostDeleteSnapshotActionEnum;
    version: PostDeleteSnapshotVersionEnum;
}
export declare class PostDeleteSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteSnapshotRequest extends SpeakeasyBase {
    queryParams: PostDeleteSnapshotQueryParams;
    headers: PostDeleteSnapshotHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteSnapshotResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
