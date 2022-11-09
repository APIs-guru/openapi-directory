import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CreateInvalidation20161125PathParams extends SpeakeasyBase {
    distributionId: string;
}
export declare class CreateInvalidation20161125Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateInvalidation20161125Request extends SpeakeasyBase {
    pathParams: CreateInvalidation20161125PathParams;
    headers: CreateInvalidation20161125Headers;
    request: Uint8Array;
}
export declare class CreateInvalidation20161125Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
