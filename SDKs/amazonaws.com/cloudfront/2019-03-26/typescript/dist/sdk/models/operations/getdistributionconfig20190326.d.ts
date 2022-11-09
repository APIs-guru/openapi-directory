import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetDistributionConfig20190326PathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetDistributionConfig20190326Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDistributionConfig20190326Request extends SpeakeasyBase {
    pathParams: GetDistributionConfig20190326PathParams;
    headers: GetDistributionConfig20190326Headers;
}
export declare class GetDistributionConfig20190326Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
