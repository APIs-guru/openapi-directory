import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreatePublicKey20181105Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreatePublicKey20181105Request extends SpeakeasyBase {
    headers: CreatePublicKey20181105Headers;
    request: Uint8Array;
}
export declare class CreatePublicKey20181105Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
