import { SpeakeasyBase } from "../../../internal/utils";
import { FunctionConfig } from "./functionconfig";
import { FunctionMetadata } from "./functionmetadata";
/**
 * Contains configuration information and metadata about a CloudFront function.
**/
export declare class FunctionSummary extends SpeakeasyBase {
    functionConfig: FunctionConfig;
    functionMetadata: FunctionMetadata;
    name: string;
    status?: string;
}
