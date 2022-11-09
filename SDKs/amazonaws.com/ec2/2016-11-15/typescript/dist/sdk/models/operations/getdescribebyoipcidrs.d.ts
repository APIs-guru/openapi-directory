import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeByoipCidrsActionEnum {
    DescribeByoipCidrs = "DescribeByoipCidrs"
}
export declare enum GetDescribeByoipCidrsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDescribeByoipCidrsQueryParams extends SpeakeasyBase {
    action: GetDescribeByoipCidrsActionEnum;
    dryRun?: boolean;
    maxResults: number;
    nextToken?: string;
    version: GetDescribeByoipCidrsVersionEnum;
}
export declare class GetDescribeByoipCidrsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeByoipCidrsRequest extends SpeakeasyBase {
    queryParams: GetDescribeByoipCidrsQueryParams;
    headers: GetDescribeByoipCidrsHeaders;
}
export declare class GetDescribeByoipCidrsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
