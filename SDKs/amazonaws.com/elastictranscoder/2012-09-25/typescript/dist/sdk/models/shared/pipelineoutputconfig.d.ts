import { SpeakeasyBase } from "../../../internal/utils";
import { Permission } from "./permission";
/**
 * The <code>PipelineOutputConfig</code> structure.
**/
export declare class PipelineOutputConfig extends SpeakeasyBase {
    bucket?: string;
    permissions?: Permission[];
    storageClass?: string;
}
