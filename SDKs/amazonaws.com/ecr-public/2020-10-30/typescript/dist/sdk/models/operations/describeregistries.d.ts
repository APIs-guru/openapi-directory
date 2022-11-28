import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeRegistriesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeRegistriesXAmzTargetEnum {
    SpencerFrontendServiceDescribeRegistries = "SpencerFrontendService.DescribeRegistries"
}
export declare class DescribeRegistriesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRegistriesXAmzTargetEnum;
}
export declare class DescribeRegistriesRequest extends SpeakeasyBase {
    queryParams: DescribeRegistriesQueryParams;
    headers: DescribeRegistriesHeaders;
    request: shared.DescribeRegistriesRequest;
}
export declare class DescribeRegistriesResponse extends SpeakeasyBase {
    contentType: string;
    describeRegistriesResponse?: shared.DescribeRegistriesResponse;
    invalidParameterException?: any;
    serverException?: any;
    statusCode: number;
    unsupportedCommandException?: any;
}
