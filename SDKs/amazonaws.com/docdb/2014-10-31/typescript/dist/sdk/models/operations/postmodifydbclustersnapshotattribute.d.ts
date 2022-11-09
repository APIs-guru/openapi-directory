import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostModifyDbClusterSnapshotAttributeActionEnum {
    ModifyDbClusterSnapshotAttribute = "ModifyDBClusterSnapshotAttribute"
}
export declare enum PostModifyDbClusterSnapshotAttributeVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostModifyDbClusterSnapshotAttributeQueryParams extends SpeakeasyBase {
    action: PostModifyDbClusterSnapshotAttributeActionEnum;
    version: PostModifyDbClusterSnapshotAttributeVersionEnum;
}
export declare class PostModifyDbClusterSnapshotAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyDbClusterSnapshotAttributeRequest extends SpeakeasyBase {
    queryParams: PostModifyDbClusterSnapshotAttributeQueryParams;
    headers: PostModifyDbClusterSnapshotAttributeHeaders;
    request?: Uint8Array;
}
export declare class PostModifyDbClusterSnapshotAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
