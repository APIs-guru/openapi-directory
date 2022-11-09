import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=CreateTimestamp" })
  createTimestamp?: Date;

  @Metadata({ data: "json, name=DeliveryStreamARN" })
  deliveryStreamArn: string;

  @Metadata({ data: "json, name=DeliveryStreamEncryptionConfiguration" })
  deliveryStreamEncryptionConfiguration?: DeliveryStreamEncryptionConfiguration;

  @Metadata({ data: "json, name=DeliveryStreamName" })
  deliveryStreamName: string;

  @Metadata({ data: "json, name=DeliveryStreamStatus" })
  deliveryStreamStatus: DeliveryStreamStatusEnum;

  @Metadata({ data: "json, name=DeliveryStreamType" })
  deliveryStreamType: DeliveryStreamTypeEnum;

  @Metadata({ data: "json, name=Destinations", elemType: shared.DestinationDescription })
  destinations: DestinationDescription[];

  @Metadata({ data: "json, name=FailureDescription" })
  failureDescription?: FailureDescription;

  @Metadata({ data: "json, name=HasMoreDestinations" })
  hasMoreDestinations: boolean;

  @Metadata({ data: "json, name=LastUpdateTimestamp" })
  lastUpdateTimestamp?: Date;

  @Metadata({ data: "json, name=Source" })
  source?: SourceDescription;

  @Metadata({ data: "json, name=VersionId" })
  versionId: string;
}
