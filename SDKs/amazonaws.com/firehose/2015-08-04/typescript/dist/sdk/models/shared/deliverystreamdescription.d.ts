import { SpeakeasyBase } from "../../../internal/utils";
import { DeliveryStreamEncryptionConfiguration } from "./deliverystreamencryptionconfiguration";
import { DeliveryStreamStatusEnum } from "./deliverystreamstatusenum";
import { DeliveryStreamTypeEnum } from "./deliverystreamtypeenum";
import { DestinationDescription } from "./destinationdescription";
import { FailureDescription } from "./failuredescription";
import { SourceDescription } from "./sourcedescription";
/**
 * Contains information about a delivery stream.
**/
export declare class DeliveryStreamDescription extends SpeakeasyBase {
    createTimestamp?: Date;
    deliveryStreamArn: string;
    deliveryStreamEncryptionConfiguration?: DeliveryStreamEncryptionConfiguration;
    deliveryStreamName: string;
    deliveryStreamStatus: DeliveryStreamStatusEnum;
    deliveryStreamType: DeliveryStreamTypeEnum;
    destinations: DestinationDescription[];
    failureDescription?: FailureDescription;
    hasMoreDestinations: boolean;
    lastUpdateTimestamp?: Date;
    source?: SourceDescription;
    versionId: string;
}
