import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum EnableKinesisStreamingDestinationXAmzTargetEnum {
    DynamoDb20120810EnableKinesisStreamingDestination = "DynamoDB_20120810.EnableKinesisStreamingDestination"
}
export declare class EnableKinesisStreamingDestinationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnableKinesisStreamingDestinationXAmzTargetEnum;
}
export declare class EnableKinesisStreamingDestinationRequest extends SpeakeasyBase {
    headers: EnableKinesisStreamingDestinationHeaders;
    request: shared.KinesisStreamingDestinationInput;
}
export declare class EnableKinesisStreamingDestinationResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    kinesisStreamingDestinationOutput?: shared.KinesisStreamingDestinationOutput;
    limitExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
