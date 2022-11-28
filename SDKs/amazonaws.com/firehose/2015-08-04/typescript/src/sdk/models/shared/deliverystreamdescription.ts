import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeliveryStreamEncryptionConfiguration } from "./deliverystreamencryptionconfiguration";
import { DeliveryStreamStatusEnum } from "./deliverystreamstatusenum";
import { DeliveryStreamTypeEnum } from "./deliverystreamtypeenum";
import { DestinationDescription } from "./destinationdescription";
import { FailureDescription } from "./failuredescription";
import { SourceDescription } from "./sourcedescription";



// DeliveryStreamDescription
/** 
 * Contains information about a delivery stream.
**/
export class DeliveryStreamDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreateTimestamp" })
  createTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=DeliveryStreamARN" })
  deliveryStreamArn: string;

  @SpeakeasyMetadata({ data: "json, name=DeliveryStreamEncryptionConfiguration" })
  deliveryStreamEncryptionConfiguration?: DeliveryStreamEncryptionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=DeliveryStreamName" })
  deliveryStreamName: string;

  @SpeakeasyMetadata({ data: "json, name=DeliveryStreamStatus" })
  deliveryStreamStatus: DeliveryStreamStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=DeliveryStreamType" })
  deliveryStreamType: DeliveryStreamTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Destinations", elemType: DestinationDescription })
  destinations: DestinationDescription[];

  @SpeakeasyMetadata({ data: "json, name=FailureDescription" })
  failureDescription?: FailureDescription;

  @SpeakeasyMetadata({ data: "json, name=HasMoreDestinations" })
  hasMoreDestinations: boolean;

  @SpeakeasyMetadata({ data: "json, name=LastUpdateTimestamp" })
  lastUpdateTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source?: SourceDescription;

  @SpeakeasyMetadata({ data: "json, name=VersionId" })
  versionId: string;
}
