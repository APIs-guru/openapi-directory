import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateInvalidation20170325PathParams extends SpeakeasyBase {
    distributionId: string;
}
export declare class CreateInvalidation20170325Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateInvalidation20170325Request extends SpeakeasyBase {
    pathParams: CreateInvalidation20170325PathParams;
    headers: CreateInvalidation20170325Headers;
    request: Uint8Array;
}
export declare class CreateInvalidation20170325Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
