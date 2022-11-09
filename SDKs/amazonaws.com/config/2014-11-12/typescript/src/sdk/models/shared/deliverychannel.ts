import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigSnapshotDeliveryProperties } from "./configsnapshotdeliveryproperties";


// DeliveryChannel
/** 
 * The channel through which Config delivers notifications and updated configuration states.
**/
export class DeliveryChannel extends SpeakeasyBase {
  @Metadata({ data: "json, name=configSnapshotDeliveryProperties" })
  configSnapshotDeliveryProperties?: ConfigSnapshotDeliveryProperties;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=s3BucketName" })
  s3BucketName?: string;

  @Metadata({ data: "json, name=s3KeyPrefix" })
  s3KeyPrefix?: string;

  @Metadata({ data: "json, name=s3KmsKeyArn" })
  s3KmsKeyArn?: string;

  @Metadata({ data: "json, name=snsTopicARN" })
  snsTopicArn?: string;
}
