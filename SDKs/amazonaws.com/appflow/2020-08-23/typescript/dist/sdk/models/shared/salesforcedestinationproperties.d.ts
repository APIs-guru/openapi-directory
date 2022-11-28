import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorHandlingConfig } from "./errorhandlingconfig";
import { WriteOperationTypeEnum } from "./writeoperationtypeenum";
/**
 *  The properties that are applied when Salesforce is being used as a destination.
**/
export declare class SalesforceDestinationProperties extends SpeakeasyBase {
    errorHandlingConfig?: ErrorHandlingConfig;
    idFieldNames?: string[];
    object: string;
    writeOperationType?: WriteOperationTypeEnum;
}
