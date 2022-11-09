import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IotEventsDestinationConfiguration } from "./ioteventsdestinationconfiguration";
import { S3DestinationConfiguration } from "./s3destinationconfiguration";


// DatasetContentDeliveryDestination
/** 
 * The destination to which dataset contents are delivered.
**/
export class DatasetContentDeliveryDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=iotEventsDestinationConfiguration" })
  iotEventsDestinationConfiguration?: IotEventsDestinationConfiguration;

  @Metadata({ data: "json, name=s3DestinationConfiguration" })
  s3DestinationConfiguration?: S3DestinationConfiguration;
}
