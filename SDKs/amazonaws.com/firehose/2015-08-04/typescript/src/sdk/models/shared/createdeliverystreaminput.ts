import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



export class CreateDeliveryStreamInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeliveryStreamEncryptionConfigurationInput" })
  deliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInput;

  @SpeakeasyMetadata({ data: "json, name=DeliveryStreamName" })
  deliveryStreamName: string;

  @SpeakeasyMetadata({ data: "json, name=DeliveryStreamType" })
  deliveryStreamType?: DeliveryStreamTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ElasticsearchDestinationConfiguration" })
  elasticsearchDestinationConfiguration?: ElasticsearchDestinationConfiguration;

  @SpeakeasyMetadata({ data: "json, name=ExtendedS3DestinationConfiguration" })
  extendedS3DestinationConfiguration?: ExtendedS3DestinationConfiguration;

  @SpeakeasyMetadata({ data: "json, name=HttpEndpointDestinationConfiguration" })
  httpEndpointDestinationConfiguration?: HttpEndpointDestinationConfiguration;

  @SpeakeasyMetadata({ data: "json, name=KinesisStreamSourceConfiguration" })
  kinesisStreamSourceConfiguration?: KinesisStreamSourceConfiguration;

  @SpeakeasyMetadata({ data: "json, name=RedshiftDestinationConfiguration" })
  redshiftDestinationConfiguration?: RedshiftDestinationConfiguration;

  @SpeakeasyMetadata({ data: "json, name=S3DestinationConfiguration" })
  s3DestinationConfiguration?: S3DestinationConfiguration;

  @SpeakeasyMetadata({ data: "json, name=SplunkDestinationConfiguration" })
  splunkDestinationConfiguration?: SplunkDestinationConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
