import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeletePublicKey20181105PathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeletePublicKey20181105Headers extends SpeakeasyBase {
    ifMatch?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeletePublicKey20181105Request extends SpeakeasyBase {
    pathParams: DeletePublicKey20181105PathParams;
    headers: DeletePublicKey20181105Headers;
}
export declare class DeletePublicKey20181105Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
