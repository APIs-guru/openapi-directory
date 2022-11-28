import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigSnapshotDeliveryProperties } from "./configsnapshotdeliveryproperties";
/**
 * The channel through which Config delivers notifications and updated configuration states.
**/
export declare class DeliveryChannel extends SpeakeasyBase {
    configSnapshotDeliveryProperties?: ConfigSnapshotDeliveryProperties;
    name?: string;
    s3BucketName?: string;
    s3KeyPrefix?: string;
    s3KmsKeyArn?: string;
    snsTopicArn?: string;
}
