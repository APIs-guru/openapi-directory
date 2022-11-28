import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateStudioXAmzTargetEnum {
    ElasticMapReduceUpdateStudio = "ElasticMapReduce.UpdateStudio"
}
export declare class UpdateStudioHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateStudioXAmzTargetEnum;
}
export declare class UpdateStudioRequest extends SpeakeasyBase {
    headers: UpdateStudioHeaders;
    request: shared.UpdateStudioInput;
}
export declare class UpdateStudioResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
