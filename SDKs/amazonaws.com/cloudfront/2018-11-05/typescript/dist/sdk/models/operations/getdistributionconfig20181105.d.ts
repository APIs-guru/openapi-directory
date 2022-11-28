import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDistributionConfig20181105PathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetDistributionConfig20181105Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDistributionConfig20181105Request extends SpeakeasyBase {
    pathParams: GetDistributionConfig20181105PathParams;
    headers: GetDistributionConfig20181105Headers;
}
export declare class GetDistributionConfig20181105Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
