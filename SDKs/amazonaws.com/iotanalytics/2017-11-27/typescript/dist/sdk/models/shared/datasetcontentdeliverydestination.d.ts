import { SpeakeasyBase } from "../../../internal/utils/utils";
import { IotEventsDestinationConfiguration } from "./ioteventsdestinationconfiguration";
import { S3DestinationConfiguration } from "./s3destinationconfiguration";
/**
 * The destination to which dataset contents are delivered.
**/
export declare class DatasetContentDeliveryDestination extends SpeakeasyBase {
    iotEventsDestinationConfiguration?: IotEventsDestinationConfiguration;
    s3DestinationConfiguration?: S3DestinationConfiguration;
}
