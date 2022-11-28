import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateStudioXAmzTargetEnum {
    ElasticMapReduceCreateStudio = "ElasticMapReduce.CreateStudio"
}
export declare class CreateStudioHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateStudioXAmzTargetEnum;
}
export declare class CreateStudioRequest extends SpeakeasyBase {
    headers: CreateStudioHeaders;
    request: shared.CreateStudioInput;
}
export declare class CreateStudioResponse extends SpeakeasyBase {
    contentType: string;
    createStudioOutput?: shared.CreateStudioOutput;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
