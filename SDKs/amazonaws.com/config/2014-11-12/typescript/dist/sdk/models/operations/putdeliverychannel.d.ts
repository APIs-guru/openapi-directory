import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutDeliveryChannelXAmzTargetEnum {
    StarlingDoveServicePutDeliveryChannel = "StarlingDoveService.PutDeliveryChannel"
}
export declare class PutDeliveryChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutDeliveryChannelXAmzTargetEnum;
}
export declare class PutDeliveryChannelRequest extends SpeakeasyBase {
    headers: PutDeliveryChannelHeaders;
    request: shared.PutDeliveryChannelRequest;
}
export declare class PutDeliveryChannelResponse extends SpeakeasyBase {
    contentType: string;
    insufficientDeliveryPolicyException?: any;
    invalidDeliveryChannelNameException?: any;
    invalidS3KeyPrefixException?: any;
    invalidS3KmsKeyArnException?: any;
    invalidSnsTopicArnException?: any;
    maxNumberOfDeliveryChannelsExceededException?: any;
    noAvailableConfigurationRecorderException?: any;
    noSuchBucketException?: any;
    statusCode: number;
}
