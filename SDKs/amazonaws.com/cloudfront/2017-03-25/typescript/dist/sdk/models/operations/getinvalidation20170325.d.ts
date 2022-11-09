import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetInvalidation20170325PathParams extends SpeakeasyBase {
    distributionId: string;
    id: string;
}
export declare class GetInvalidation20170325Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetInvalidation20170325Request extends SpeakeasyBase {
    pathParams: GetInvalidation20170325PathParams;
    headers: GetInvalidation20170325Headers;
}
export declare class GetInvalidation20170325Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
