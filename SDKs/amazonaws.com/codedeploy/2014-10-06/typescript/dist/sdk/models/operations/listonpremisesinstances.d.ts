import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListOnPremisesInstancesXAmzTargetEnum {
    CodeDeploy20141006ListOnPremisesInstances = "CodeDeploy_20141006.ListOnPremisesInstances"
}
export declare class ListOnPremisesInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListOnPremisesInstancesXAmzTargetEnum;
}
export declare class ListOnPremisesInstancesRequest extends SpeakeasyBase {
    headers: ListOnPremisesInstancesHeaders;
    request: shared.ListOnPremisesInstancesInput;
}
export declare class ListOnPremisesInstancesResponse extends SpeakeasyBase {
    contentType: string;
    invalidNextTokenException?: any;
    invalidRegistrationStatusException?: any;
    invalidTagFilterException?: any;
    listOnPremisesInstancesOutput?: shared.ListOnPremisesInstancesOutput;
    statusCode: number;
}
