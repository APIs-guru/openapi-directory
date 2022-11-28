import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationDetails } from "./destinationdetails";
import { DestinationTypeEnum } from "./destinationtypeenum";
import { LogFormatEnum } from "./logformatenum";
import { LogTypeEnum } from "./logtypeenum";
import { LogDeliveryConfigurationStatusEnum } from "./logdeliveryconfigurationstatusenum";
/**
 * Returns the destination, format and type of the logs.
**/
export declare class LogDeliveryConfiguration extends SpeakeasyBase {
    destinationDetails?: DestinationDetails;
    destinationType?: DestinationTypeEnum;
    logFormat?: LogFormatEnum;
    logType?: LogTypeEnum;
    message?: string;
    status?: LogDeliveryConfigurationStatusEnum;
}
