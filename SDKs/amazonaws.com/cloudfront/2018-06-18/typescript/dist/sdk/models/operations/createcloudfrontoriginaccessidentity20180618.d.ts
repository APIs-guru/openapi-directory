import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateCloudFrontOriginAccessIdentity20180618Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateCloudFrontOriginAccessIdentity20180618Request extends SpeakeasyBase {
    headers: CreateCloudFrontOriginAccessIdentity20180618Headers;
    request: Uint8Array;
}
export declare class CreateCloudFrontOriginAccessIdentity20180618Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
