import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigSnapshotDeliveryProperties } from "./configsnapshotdeliveryproperties";



// DeliveryChannel
/** 
 * The channel through which Config delivers notifications and updated configuration states.
**/
export class DeliveryChannel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configSnapshotDeliveryProperties" })
  configSnapshotDeliveryProperties?: ConfigSnapshotDeliveryProperties;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=s3BucketName" })
  s3BucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=s3KeyPrefix" })
  s3KeyPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=s3KmsKeyArn" })
  s3KmsKeyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=snsTopicARN" })
  snsTopicArn?: string;
}
