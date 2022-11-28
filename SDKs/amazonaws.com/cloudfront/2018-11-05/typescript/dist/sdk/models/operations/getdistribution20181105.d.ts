import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDistribution20181105PathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetDistribution20181105Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDistribution20181105Request extends SpeakeasyBase {
    pathParams: GetDistribution20181105PathParams;
    headers: GetDistribution20181105Headers;
}
export declare class GetDistribution20181105Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
