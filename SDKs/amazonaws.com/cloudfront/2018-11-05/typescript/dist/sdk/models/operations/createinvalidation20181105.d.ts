import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateInvalidation20181105PathParams extends SpeakeasyBase {
    distributionId: string;
}
export declare class CreateInvalidation20181105Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateInvalidation20181105Request extends SpeakeasyBase {
    pathParams: CreateInvalidation20181105PathParams;
    headers: CreateInvalidation20181105Headers;
    request: Uint8Array;
}
export declare class CreateInvalidation20181105Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
