import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCloudFrontOriginAccessIdentity20170325PathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetCloudFrontOriginAccessIdentity20170325Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCloudFrontOriginAccessIdentity20170325Request extends SpeakeasyBase {
    pathParams: GetCloudFrontOriginAccessIdentity20170325PathParams;
    headers: GetCloudFrontOriginAccessIdentity20170325Headers;
}
export declare class GetCloudFrontOriginAccessIdentity20170325Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
