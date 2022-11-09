import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetInvalidation20181105PathParams extends SpeakeasyBase {
    distributionId: string;
    id: string;
}
export declare class GetInvalidation20181105Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetInvalidation20181105Request extends SpeakeasyBase {
    pathParams: GetInvalidation20181105PathParams;
    headers: GetInvalidation20181105Headers;
}
export declare class GetInvalidation20181105Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
