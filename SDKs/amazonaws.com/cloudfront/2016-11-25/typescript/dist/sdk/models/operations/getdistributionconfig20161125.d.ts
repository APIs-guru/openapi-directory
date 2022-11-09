import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetDistributionConfig20161125PathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetDistributionConfig20161125Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDistributionConfig20161125Request extends SpeakeasyBase {
    pathParams: GetDistributionConfig20161125PathParams;
    headers: GetDistributionConfig20161125Headers;
}
export declare class GetDistributionConfig20161125Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
