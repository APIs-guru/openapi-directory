import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeRemediationExceptionsQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeRemediationExceptionsXAmzTargetEnum {
    StarlingDoveServiceDescribeRemediationExceptions = "StarlingDoveService.DescribeRemediationExceptions"
}
export declare class DescribeRemediationExceptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRemediationExceptionsXAmzTargetEnum;
}
export declare class DescribeRemediationExceptionsRequest extends SpeakeasyBase {
    queryParams: DescribeRemediationExceptionsQueryParams;
    headers: DescribeRemediationExceptionsHeaders;
    request: shared.DescribeRemediationExceptionsRequest;
}
export declare class DescribeRemediationExceptionsResponse extends SpeakeasyBase {
    contentType: string;
    describeRemediationExceptionsResponse?: shared.DescribeRemediationExceptionsResponse;
    invalidNextTokenException?: any;
    invalidParameterValueException?: any;
    statusCode: number;
}
