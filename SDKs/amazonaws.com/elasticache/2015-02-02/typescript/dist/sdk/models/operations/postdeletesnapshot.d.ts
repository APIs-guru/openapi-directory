import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteSnapshotActionEnum {
    DeleteSnapshot = "DeleteSnapshot"
}
export declare enum PostDeleteSnapshotVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
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
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
