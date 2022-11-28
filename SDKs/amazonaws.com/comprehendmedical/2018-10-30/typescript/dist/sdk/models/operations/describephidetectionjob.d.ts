import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribePhiDetectionJobXAmzTargetEnum {
    ComprehendMedical20181030DescribePhiDetectionJob = "ComprehendMedical_20181030.DescribePHIDetectionJob"
}
export declare class DescribePhiDetectionJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePhiDetectionJobXAmzTargetEnum;
}
export declare class DescribePhiDetectionJobRequest extends SpeakeasyBase {
    headers: DescribePhiDetectionJobHeaders;
    request: shared.DescribePhiDetectionJobRequest;
}
export declare class DescribePhiDetectionJobResponse extends SpeakeasyBase {
    contentType: string;
    describePhiDetectionJobResponse?: shared.DescribePhiDetectionJobResponse;
    internalServerException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
