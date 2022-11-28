import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteStudioXAmzTargetEnum {
    ElasticMapReduceDeleteStudio = "ElasticMapReduce.DeleteStudio"
}
export declare class DeleteStudioHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteStudioXAmzTargetEnum;
}
export declare class DeleteStudioRequest extends SpeakeasyBase {
    headers: DeleteStudioHeaders;
    request: shared.DeleteStudioInput;
}
export declare class DeleteStudioResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
