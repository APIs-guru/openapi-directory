import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=DeliveryStreamEncryptionConfigurationInput" })
  deliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInput;

  @Metadata({ data: "json, name=DeliveryStreamName" })
  deliveryStreamName: string;

  @Metadata({ data: "json, name=DeliveryStreamType" })
  deliveryStreamType?: DeliveryStreamTypeEnum;

  @Metadata({ data: "json, name=ElasticsearchDestinationConfiguration" })
  elasticsearchDestinationConfiguration?: ElasticsearchDestinationConfiguration;

  @Metadata({ data: "json, name=ExtendedS3DestinationConfiguration" })
  extendedS3DestinationConfiguration?: ExtendedS3DestinationConfiguration;

  @Metadata({ data: "json, name=HttpEndpointDestinationConfiguration" })
  httpEndpointDestinationConfiguration?: HttpEndpointDestinationConfiguration;

  @Metadata({ data: "json, name=KinesisStreamSourceConfiguration" })
  kinesisStreamSourceConfiguration?: KinesisStreamSourceConfiguration;

  @Metadata({ data: "json, name=RedshiftDestinationConfiguration" })
  redshiftDestinationConfiguration?: RedshiftDestinationConfiguration;

  @Metadata({ data: "json, name=S3DestinationConfiguration" })
  s3DestinationConfiguration?: S3DestinationConfiguration;

  @Metadata({ data: "json, name=SplunkDestinationConfiguration" })
  splunkDestinationConfiguration?: SplunkDestinationConfiguration;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
