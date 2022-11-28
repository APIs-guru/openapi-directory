import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeProjectXAmzTargetEnum {
    CodeStar20170419DescribeProject = "CodeStar_20170419.DescribeProject"
}
export declare class DescribeProjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeProjectXAmzTargetEnum;
}
export declare class DescribeProjectRequest extends SpeakeasyBase {
    headers: DescribeProjectHeaders;
    request: shared.DescribeProjectRequest;
}
export declare class DescribeProjectResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    describeProjectResult?: shared.DescribeProjectResult;
    invalidServiceRoleException?: any;
    projectConfigurationException?: any;
    projectNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
