import { SpeakeasyBase } from "../../../internal/utils";
import { WriteOperationTypeEnum } from "./writeoperationtypeenum";
/**
 *  The properties that can be applied to a field when connector is being used as a destination.
**/
export declare class DestinationFieldProperties extends SpeakeasyBase {
    isCreatable?: boolean;
    isNullable?: boolean;
    isUpdatable?: boolean;
    isUpsertable?: boolean;
    supportedWriteOperations?: WriteOperationTypeEnum[];
}
