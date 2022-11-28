import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AddTagsToOnPremisesInstancesXAmzTargetEnum {
    CodeDeploy20141006AddTagsToOnPremisesInstances = "CodeDeploy_20141006.AddTagsToOnPremisesInstances"
}
export declare class AddTagsToOnPremisesInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddTagsToOnPremisesInstancesXAmzTargetEnum;
}
export declare class AddTagsToOnPremisesInstancesRequest extends SpeakeasyBase {
    headers: AddTagsToOnPremisesInstancesHeaders;
    request: shared.AddTagsToOnPremisesInstancesInput;
}
export declare class AddTagsToOnPremisesInstancesResponse extends SpeakeasyBase {
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
