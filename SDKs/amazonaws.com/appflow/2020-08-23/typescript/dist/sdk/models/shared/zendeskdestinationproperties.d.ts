import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorHandlingConfig } from "./errorhandlingconfig";
import { WriteOperationTypeEnum } from "./writeoperationtypeenum";
/**
 * The properties that are applied when Zendesk is used as a destination.
**/
export declare class ZendeskDestinationProperties extends SpeakeasyBase {
    errorHandlingConfig?: ErrorHandlingConfig;
    idFieldNames?: string[];
    object: string;
    writeOperationType?: WriteOperationTypeEnum;
}
