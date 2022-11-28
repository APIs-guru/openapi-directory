import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeHsmXAmzTargetEnum {
    CloudHsmFrontendServiceDescribeHsm = "CloudHsmFrontendService.DescribeHsm"
}
export declare class DescribeHsmHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeHsmXAmzTargetEnum;
}
export declare class DescribeHsmRequest extends SpeakeasyBase {
    headers: DescribeHsmHeaders;
    request: shared.DescribeHsmRequest;
}
export declare class DescribeHsmResponse extends SpeakeasyBase {
    cloudHsmInternalException?: any;
    cloudHsmServiceException?: any;
    contentType: string;
    describeHsmResponse?: shared.DescribeHsmResponse;
    invalidRequestException?: any;
    statusCode: number;
}
