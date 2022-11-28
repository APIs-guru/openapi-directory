import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPublicKey20181105PathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPublicKey20181105Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetPublicKey20181105Request extends SpeakeasyBase {
    pathParams: GetPublicKey20181105PathParams;
    headers: GetPublicKey20181105Headers;
}
export declare class GetPublicKey20181105Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
