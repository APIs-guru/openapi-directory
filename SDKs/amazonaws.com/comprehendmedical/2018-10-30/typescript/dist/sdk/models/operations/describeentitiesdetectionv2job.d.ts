import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeEntitiesDetectionV2JobXAmzTargetEnum {
    ComprehendMedical20181030DescribeEntitiesDetectionV2Job = "ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job"
}
export declare class DescribeEntitiesDetectionV2JobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEntitiesDetectionV2JobXAmzTargetEnum;
}
export declare class DescribeEntitiesDetectionV2JobRequest extends SpeakeasyBase {
    headers: DescribeEntitiesDetectionV2JobHeaders;
    request: shared.DescribeEntitiesDetectionV2JobRequest;
}
export declare class DescribeEntitiesDetectionV2JobResponse extends SpeakeasyBase {
    contentType: string;
    describeEntitiesDetectionV2JobResponse?: shared.DescribeEntitiesDetectionV2JobResponse;
    internalServerException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
