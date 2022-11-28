import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RemoveTagsFromOnPremisesInstancesXAmzTargetEnum {
    CodeDeploy20141006RemoveTagsFromOnPremisesInstances = "CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances"
}
export declare class RemoveTagsFromOnPremisesInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveTagsFromOnPremisesInstancesXAmzTargetEnum;
}
export declare class RemoveTagsFromOnPremisesInstancesRequest extends SpeakeasyBase {
    headers: RemoveTagsFromOnPremisesInstancesHeaders;
    request: shared.RemoveTagsFromOnPremisesInstancesInput;
}
export declare class RemoveTagsFromOnPremisesInstancesResponse extends SpeakeasyBase {
    contentType: string;
    instanceLimitExceededException?: any;
    instanceNameRequiredException?: any;
    instanceNotRegisteredException?: any;
    invalidInstanceNameException?: any;
    invalidTagException?: any;
    statusCode: number;
    tagLimitExceededException?: any;
    tagRequiredException?: any;
}
