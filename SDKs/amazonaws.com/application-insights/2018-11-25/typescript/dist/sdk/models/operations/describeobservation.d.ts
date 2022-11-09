import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeObservationXAmzTargetEnum {
    Ec2WindowsBarleyServiceDescribeObservation = "EC2WindowsBarleyService.DescribeObservation"
}
export declare class DescribeObservationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeObservationXAmzTargetEnum;
}
export declare class DescribeObservationRequest extends SpeakeasyBase {
    headers: DescribeObservationHeaders;
    request: shared.DescribeObservationRequest;
}
export declare class DescribeObservationResponse extends SpeakeasyBase {
    contentType: string;
    describeObservationResponse?: shared.DescribeObservationResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
