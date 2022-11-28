import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeRemediationExecutionStatusQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeRemediationExecutionStatusXAmzTargetEnum {
    StarlingDoveServiceDescribeRemediationExecutionStatus = "StarlingDoveService.DescribeRemediationExecutionStatus"
}
export declare class DescribeRemediationExecutionStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRemediationExecutionStatusXAmzTargetEnum;
}
export declare class DescribeRemediationExecutionStatusRequest extends SpeakeasyBase {
    queryParams: DescribeRemediationExecutionStatusQueryParams;
    headers: DescribeRemediationExecutionStatusHeaders;
    request: shared.DescribeRemediationExecutionStatusRequest;
}
export declare class DescribeRemediationExecutionStatusResponse extends SpeakeasyBase {
    contentType: string;
    describeRemediationExecutionStatusResponse?: shared.DescribeRemediationExecutionStatusResponse;
    invalidNextTokenException?: any;
    invalidParameterValueException?: any;
    noSuchRemediationConfigurationException?: any;
    statusCode: number;
}
