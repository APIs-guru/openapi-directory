import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeAgentsXAmzTargetEnum {
    AwsPoseidonServiceV20151101DescribeAgents = "AWSPoseidonService_V2015_11_01.DescribeAgents"
}
export declare class DescribeAgentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAgentsXAmzTargetEnum;
}
export declare class DescribeAgentsRequest extends SpeakeasyBase {
    headers: DescribeAgentsHeaders;
    request: shared.DescribeAgentsRequest;
}
export declare class DescribeAgentsResponse extends SpeakeasyBase {
    authorizationErrorException?: any;
    contentType: string;
    describeAgentsResponse?: shared.DescribeAgentsResponse;
    homeRegionNotSetException?: any;
    invalidParameterException?: any;
    invalidParameterValueException?: any;
    serverInternalErrorException?: any;
    statusCode: number;
}
