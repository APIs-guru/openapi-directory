import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetails } from "./errordetails";
/**
 * An object that contains the error details for an operation on a schema version.
**/
export declare class SchemaVersionErrorItem extends SpeakeasyBase {
    errorDetails?: ErrorDetails;
    versionNumber?: number;
}
