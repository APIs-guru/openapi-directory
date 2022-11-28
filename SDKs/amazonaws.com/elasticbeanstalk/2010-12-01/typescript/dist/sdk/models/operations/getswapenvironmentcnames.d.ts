import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetSwapEnvironmentCnamEsActionEnum {
    SwapEnvironmentCnamEs = "SwapEnvironmentCNAMEs"
}
export declare enum GetSwapEnvironmentCnamEsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetSwapEnvironmentCnamEsQueryParams extends SpeakeasyBase {
    action: GetSwapEnvironmentCnamEsActionEnum;
    destinationEnvironmentId?: string;
    destinationEnvironmentName?: string;
    sourceEnvironmentId?: string;
    sourceEnvironmentName?: string;
    version: GetSwapEnvironmentCnamEsVersionEnum;
}
export declare class GetSwapEnvironmentCnamEsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSwapEnvironmentCnamEsRequest extends SpeakeasyBase {
    queryParams: GetSwapEnvironmentCnamEsQueryParams;
    headers: GetSwapEnvironmentCnamEsHeaders;
}
export declare class GetSwapEnvironmentCnamEsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
