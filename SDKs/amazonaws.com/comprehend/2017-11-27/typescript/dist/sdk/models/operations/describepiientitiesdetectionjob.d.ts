import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribePiiEntitiesDetectionJobXAmzTargetEnum {
    Comprehend20171127DescribePiiEntitiesDetectionJob = "Comprehend_20171127.DescribePiiEntitiesDetectionJob"
}
export declare class DescribePiiEntitiesDetectionJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePiiEntitiesDetectionJobXAmzTargetEnum;
}
export declare class DescribePiiEntitiesDetectionJobRequest extends SpeakeasyBase {
    headers: DescribePiiEntitiesDetectionJobHeaders;
    request: shared.DescribePiiEntitiesDetectionJobRequest;
}
export declare class DescribePiiEntitiesDetectionJobResponse extends SpeakeasyBase {
    contentType: string;
    describePiiEntitiesDetectionJobResponse?: shared.DescribePiiEntitiesDetectionJobResponse;
    internalServerException?: any;
    invalidRequestException?: any;
    jobNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
