import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CancelStepsXAmzTargetEnum {
    ElasticMapReduceCancelSteps = "ElasticMapReduce.CancelSteps"
}
export declare class CancelStepsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelStepsXAmzTargetEnum;
}
export declare class CancelStepsRequest extends SpeakeasyBase {
    headers: CancelStepsHeaders;
    request: shared.CancelStepsInput;
}
export declare class CancelStepsResponse extends SpeakeasyBase {
    cancelStepsOutput?: shared.CancelStepsOutput;
    contentType: string;
    internalServerError?: any;
    invalidRequestException?: any;
    statusCode: number;
}
