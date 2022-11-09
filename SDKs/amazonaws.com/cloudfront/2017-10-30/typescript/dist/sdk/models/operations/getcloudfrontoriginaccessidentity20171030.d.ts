import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetCloudFrontOriginAccessIdentity20171030PathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetCloudFrontOriginAccessIdentity20171030Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCloudFrontOriginAccessIdentity20171030Request extends SpeakeasyBase {
    pathParams: GetCloudFrontOriginAccessIdentity20171030PathParams;
    headers: GetCloudFrontOriginAccessIdentity20171030Headers;
}
export declare class GetCloudFrontOriginAccessIdentity20171030Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
