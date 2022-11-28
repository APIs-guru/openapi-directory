import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeLaunchConfigurationsActionEnum {
    DescribeLaunchConfigurations = "DescribeLaunchConfigurations"
}
export declare enum PostDescribeLaunchConfigurationsVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostDescribeLaunchConfigurationsQueryParams extends SpeakeasyBase {
    action: PostDescribeLaunchConfigurationsActionEnum;
    maxRecords?: string;
    nextToken?: string;
    version: PostDescribeLaunchConfigurationsVersionEnum;
}
export declare class PostDescribeLaunchConfigurationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeLaunchConfigurationsRequest extends SpeakeasyBase {
    queryParams: PostDescribeLaunchConfigurationsQueryParams;
    headers: PostDescribeLaunchConfigurationsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeLaunchConfigurationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
