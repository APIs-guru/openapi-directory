import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationDetails } from "./destinationdetails";
import { DestinationTypeEnum } from "./destinationtypeenum";
import { LogFormatEnum } from "./logformatenum";
import { LogTypeEnum } from "./logtypeenum";
/**
 * The log delivery configurations being modified
**/
export declare class PendingLogDeliveryConfiguration extends SpeakeasyBase {
    destinationDetails?: DestinationDetails;
    destinationType?: DestinationTypeEnum;
    logFormat?: LogFormatEnum;
    logType?: LogTypeEnum;
}
