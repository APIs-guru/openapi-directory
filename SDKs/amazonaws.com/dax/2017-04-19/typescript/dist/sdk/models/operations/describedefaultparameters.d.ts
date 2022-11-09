import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeDefaultParametersXAmzTargetEnum {
    AmazonDaxv3DescribeDefaultParameters = "AmazonDAXV3.DescribeDefaultParameters"
}
export declare class DescribeDefaultParametersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDefaultParametersXAmzTargetEnum;
}
export declare class DescribeDefaultParametersRequest extends SpeakeasyBase {
    headers: DescribeDefaultParametersHeaders;
    request: shared.DescribeDefaultParametersRequest;
}
export declare class DescribeDefaultParametersResponse extends SpeakeasyBase {
    contentType: string;
    describeDefaultParametersResponse?: shared.DescribeDefaultParametersResponse;
    invalidParameterCombinationException?: any;
    invalidParameterValueException?: any;
    serviceLinkedRoleNotFoundFault?: any;
    statusCode: number;
}
