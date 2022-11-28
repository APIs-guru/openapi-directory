import { SpeakeasyBase } from "../../../internal/utils";
import { DeliveryStreamEncryptionConfigurationInput } from "./deliverystreamencryptionconfigurationinput";
import { DeliveryStreamTypeEnum } from "./deliverystreamtypeenum";
import { ElasticsearchDestinationConfiguration } from "./elasticsearchdestinationconfiguration";
import { ExtendedS3DestinationConfiguration } from "./extendeds3destinationconfiguration";
import { HttpEndpointDestinationConfiguration } from "./httpendpointdestinationconfiguration";
import { KinesisStreamSourceConfiguration } from "./kinesisstreamsourceconfiguration";
import { RedshiftDestinationConfiguration } from "./redshiftdestinationconfiguration";
import { S3DestinationConfiguration } from "./s3destinationconfiguration";
import { SplunkDestinationConfiguration } from "./splunkdestinationconfiguration";
import { Tag } from "./tag";
export declare class CreateDeliveryStreamInput extends SpeakeasyBase {
    deliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInput;
    deliveryStreamName: string;
    deliveryStreamType?: DeliveryStreamTypeEnum;
    elasticsearchDestinationConfiguration?: ElasticsearchDestinationConfiguration;
    extendedS3DestinationConfiguration?: ExtendedS3DestinationConfiguration;
    httpEndpointDestinationConfiguration?: HttpEndpointDestinationConfiguration;
    kinesisStreamSourceConfiguration?: KinesisStreamSourceConfiguration;
    redshiftDestinationConfiguration?: RedshiftDestinationConfiguration;
    s3DestinationConfiguration?: S3DestinationConfiguration;
    splunkDestinationConfiguration?: SplunkDestinationConfiguration;
    tags?: Tag[];
}
