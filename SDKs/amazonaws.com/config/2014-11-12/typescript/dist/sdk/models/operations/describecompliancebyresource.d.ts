import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeComplianceByResourceQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeComplianceByResourceXAmzTargetEnum {
    StarlingDoveServiceDescribeComplianceByResource = "StarlingDoveService.DescribeComplianceByResource"
}
export declare class DescribeComplianceByResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeComplianceByResourceXAmzTargetEnum;
}
export declare class DescribeComplianceByResourceRequest extends SpeakeasyBase {
    queryParams: DescribeComplianceByResourceQueryParams;
    headers: DescribeComplianceByResourceHeaders;
    request: shared.DescribeComplianceByResourceRequest;
}
export declare class DescribeComplianceByResourceResponse extends SpeakeasyBase {
    contentType: string;
    describeComplianceByResourceResponse?: shared.DescribeComplianceByResourceResponse;
    invalidNextTokenException?: any;
    invalidParameterValueException?: any;
    statusCode: number;
}
