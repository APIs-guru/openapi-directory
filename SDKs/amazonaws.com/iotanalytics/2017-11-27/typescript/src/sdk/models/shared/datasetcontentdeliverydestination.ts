import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IotEventsDestinationConfiguration } from "./ioteventsdestinationconfiguration";
import { S3DestinationConfiguration } from "./s3destinationconfiguration";



// DatasetContentDeliveryDestination
/** 
 * The destination to which dataset contents are delivered.
**/
export class DatasetContentDeliveryDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=iotEventsDestinationConfiguration" })
  iotEventsDestinationConfiguration?: IotEventsDestinationConfiguration;

  @SpeakeasyMetadata({ data: "json, name=s3DestinationConfiguration" })
  s3DestinationConfiguration?: S3DestinationConfiguration;
}
