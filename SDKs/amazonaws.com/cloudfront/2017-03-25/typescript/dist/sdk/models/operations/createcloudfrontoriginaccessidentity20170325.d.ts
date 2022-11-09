import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CreateCloudFrontOriginAccessIdentity20170325Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateCloudFrontOriginAccessIdentity20170325Request extends SpeakeasyBase {
    headers: CreateCloudFrontOriginAccessIdentity20170325Headers;
    request: Uint8Array;
}
export declare class CreateCloudFrontOriginAccessIdentity20170325Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
