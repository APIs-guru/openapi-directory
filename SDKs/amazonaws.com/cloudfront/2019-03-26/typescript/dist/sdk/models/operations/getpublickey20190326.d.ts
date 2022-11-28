import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPublicKey20190326PathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPublicKey20190326Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetPublicKey20190326Request extends SpeakeasyBase {
    pathParams: GetPublicKey20190326PathParams;
    headers: GetPublicKey20190326Headers;
}
export declare class GetPublicKey20190326Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
