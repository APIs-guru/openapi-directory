import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinationDetails } from "./destinationdetails";
import { DestinationTypeEnum } from "./destinationtypeenum";
import { LogFormatEnum } from "./logformatenum";
import { LogTypeEnum } from "./logtypeenum";



// PendingLogDeliveryConfiguration
/** 
 * The log delivery configurations being modified 
**/
export class PendingLogDeliveryConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  destinationDetails?: DestinationDetails;

  @SpeakeasyMetadata()
  destinationType?: DestinationTypeEnum;

  @SpeakeasyMetadata()
  logFormat?: LogFormatEnum;

  @SpeakeasyMetadata()
  logType?: LogTypeEnum;
}
