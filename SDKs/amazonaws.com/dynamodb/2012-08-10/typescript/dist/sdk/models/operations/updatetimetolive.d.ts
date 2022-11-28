import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateTimeToLiveXAmzTargetEnum {
    DynamoDb20120810UpdateTimeToLive = "DynamoDB_20120810.UpdateTimeToLive"
}
export declare class UpdateTimeToLiveHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTimeToLiveXAmzTargetEnum;
}
export declare class UpdateTimeToLiveRequest extends SpeakeasyBase {
    headers: UpdateTimeToLiveHeaders;
    request: shared.UpdateTimeToLiveInput;
}
export declare class UpdateTimeToLiveResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    limitExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateTimeToLiveOutput?: shared.UpdateTimeToLiveOutput;
}
