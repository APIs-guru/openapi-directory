import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeRulesPackagesXAmzTargetEnum {
    InspectorServiceDescribeRulesPackages = "InspectorService.DescribeRulesPackages"
}
export declare class DescribeRulesPackagesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRulesPackagesXAmzTargetEnum;
}
export declare class DescribeRulesPackagesRequest extends SpeakeasyBase {
    headers: DescribeRulesPackagesHeaders;
    request: shared.DescribeRulesPackagesRequest;
}
export declare class DescribeRulesPackagesResponse extends SpeakeasyBase {
    contentType: string;
    describeRulesPackagesResponse?: shared.DescribeRulesPackagesResponse;
    internalException?: any;
    invalidInputException?: any;
    statusCode: number;
}
