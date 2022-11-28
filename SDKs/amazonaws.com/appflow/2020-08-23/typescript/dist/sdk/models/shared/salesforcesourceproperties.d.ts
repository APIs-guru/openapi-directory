import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  The properties that are applied when Salesforce is being used as a source.
**/
export declare class SalesforceSourceProperties extends SpeakeasyBase {
    enableDynamicFieldUpdate?: boolean;
    includeDeletedRecords?: boolean;
    object: string;
}
