import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisableKinesisStreamingDestinationXAmzTargetEnum {
    DynamoDb20120810DisableKinesisStreamingDestination = "DynamoDB_20120810.DisableKinesisStreamingDestination"
}
export declare class DisableKinesisStreamingDestinationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableKinesisStreamingDestinationXAmzTargetEnum;
}
export declare class DisableKinesisStreamingDestinationRequest extends SpeakeasyBase {
    headers: DisableKinesisStreamingDestinationHeaders;
    request: shared.KinesisStreamingDestinationInput;
}
export declare class DisableKinesisStreamingDestinationResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    kinesisStreamingDestinationOutput?: shared.KinesisStreamingDestinationOutput;
    limitExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
