import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetInvalidation20161125PathParams extends SpeakeasyBase {
    distributionId: string;
    id: string;
}
export declare class GetInvalidation20161125Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetInvalidation20161125Request extends SpeakeasyBase {
    pathParams: GetInvalidation20161125PathParams;
    headers: GetInvalidation20161125Headers;
}
export declare class GetInvalidation20161125Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
