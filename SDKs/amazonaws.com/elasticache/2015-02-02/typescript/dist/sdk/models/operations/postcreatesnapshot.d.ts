import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateSnapshotActionEnum {
    CreateSnapshot = "CreateSnapshot"
}
export declare enum PostCreateSnapshotVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostCreateSnapshotQueryParams extends SpeakeasyBase {
    action: PostCreateSnapshotActionEnum;
    version: PostCreateSnapshotVersionEnum;
}
export declare class PostCreateSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateSnapshotRequest extends SpeakeasyBase {
    queryParams: PostCreateSnapshotQueryParams;
    headers: PostCreateSnapshotHeaders;
    request?: Uint8Array;
}
export declare class PostCreateSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
