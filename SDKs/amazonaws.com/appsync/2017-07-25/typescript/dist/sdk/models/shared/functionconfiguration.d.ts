import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SyncConfig } from "./syncconfig";
/**
 * A function is a reusable entity. Multiple functions can be used to compose the resolver logic.
**/
export declare class FunctionConfiguration extends SpeakeasyBase {
    dataSourceName?: string;
    description?: string;
    functionArn?: string;
    functionId?: string;
    functionVersion?: string;
    name?: string;
    requestMappingTemplate?: string;
    responseMappingTemplate?: string;
    syncConfig?: SyncConfig;
}
