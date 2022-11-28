import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateDestinationXAmzTargetEnum {
    Firehose20150804UpdateDestination = "Firehose_20150804.UpdateDestination"
}
export declare class UpdateDestinationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDestinationXAmzTargetEnum;
}
export declare class UpdateDestinationRequest extends SpeakeasyBase {
    headers: UpdateDestinationHeaders;
    request: shared.UpdateDestinationInput;
}
export declare class UpdateDestinationResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    invalidArgumentException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateDestinationOutput?: Map<string, any>;
}
