import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteTrafficMirrorTargetActionEnum {
    DeleteTrafficMirrorTarget = "DeleteTrafficMirrorTarget"
}
export declare enum PostDeleteTrafficMirrorTargetVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteTrafficMirrorTargetQueryParams extends SpeakeasyBase {
    action: PostDeleteTrafficMirrorTargetActionEnum;
    version: PostDeleteTrafficMirrorTargetVersionEnum;
}
export declare class PostDeleteTrafficMirrorTargetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteTrafficMirrorTargetRequest extends SpeakeasyBase {
    queryParams: PostDeleteTrafficMirrorTargetQueryParams;
    headers: PostDeleteTrafficMirrorTargetHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteTrafficMirrorTargetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
