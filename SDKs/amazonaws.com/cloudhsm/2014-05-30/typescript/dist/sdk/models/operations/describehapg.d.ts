import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeHapgXAmzTargetEnum {
    CloudHsmFrontendServiceDescribeHapg = "CloudHsmFrontendService.DescribeHapg"
}
export declare class DescribeHapgHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeHapgXAmzTargetEnum;
}
export declare class DescribeHapgRequest extends SpeakeasyBase {
    headers: DescribeHapgHeaders;
    request: shared.DescribeHapgRequest;
}
export declare class DescribeHapgResponse extends SpeakeasyBase {
    cloudHsmInternalException?: any;
    cloudHsmServiceException?: any;
    contentType: string;
    describeHapgResponse?: shared.DescribeHapgResponse;
    invalidRequestException?: any;
    statusCode: number;
}
