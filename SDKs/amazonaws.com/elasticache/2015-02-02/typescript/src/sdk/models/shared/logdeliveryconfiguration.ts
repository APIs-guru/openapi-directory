import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinationDetails } from "./destinationdetails";
import { DestinationTypeEnum } from "./destinationtypeenum";
import { LogFormatEnum } from "./logformatenum";
import { LogTypeEnum } from "./logtypeenum";
import { LogDeliveryConfigurationStatusEnum } from "./logdeliveryconfigurationstatusenum";



// LogDeliveryConfiguration
/** 
 * Returns the destination, format and type of the logs. 
**/
export class LogDeliveryConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  destinationDetails?: DestinationDetails;

  @SpeakeasyMetadata()
  destinationType?: DestinationTypeEnum;

  @SpeakeasyMetadata()
  logFormat?: LogFormatEnum;

  @SpeakeasyMetadata()
  logType?: LogTypeEnum;

  @SpeakeasyMetadata()
  message?: string;

  @SpeakeasyMetadata()
  status?: LogDeliveryConfigurationStatusEnum;
}
