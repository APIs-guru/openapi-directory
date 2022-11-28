import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCloudFrontOriginAccessIdentity20161125PathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetCloudFrontOriginAccessIdentity20161125Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCloudFrontOriginAccessIdentity20161125Request extends SpeakeasyBase {
    pathParams: GetCloudFrontOriginAccessIdentity20161125PathParams;
    headers: GetCloudFrontOriginAccessIdentity20161125Headers;
}
export declare class GetCloudFrontOriginAccessIdentity20161125Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
