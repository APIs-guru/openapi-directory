import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetCloudFrontOriginAccessIdentityConfig20161125PathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetCloudFrontOriginAccessIdentityConfig20161125Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCloudFrontOriginAccessIdentityConfig20161125Request extends SpeakeasyBase {
    pathParams: GetCloudFrontOriginAccessIdentityConfig20161125PathParams;
    headers: GetCloudFrontOriginAccessIdentityConfig20161125Headers;
}
export declare class GetCloudFrontOriginAccessIdentityConfig20161125Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
