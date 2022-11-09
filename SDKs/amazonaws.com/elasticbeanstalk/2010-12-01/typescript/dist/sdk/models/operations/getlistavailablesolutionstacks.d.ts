import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetListAvailableSolutionStacksActionEnum {
    ListAvailableSolutionStacks = "ListAvailableSolutionStacks"
}
export declare enum GetListAvailableSolutionStacksVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetListAvailableSolutionStacksQueryParams extends SpeakeasyBase {
    action: GetListAvailableSolutionStacksActionEnum;
    version: GetListAvailableSolutionStacksVersionEnum;
}
export declare class GetListAvailableSolutionStacksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListAvailableSolutionStacksRequest extends SpeakeasyBase {
    queryParams: GetListAvailableSolutionStacksQueryParams;
    headers: GetListAvailableSolutionStacksHeaders;
}
export declare class GetListAvailableSolutionStacksResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
