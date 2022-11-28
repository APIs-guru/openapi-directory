import { SpeakeasyBase } from "../../../internal/utils";
import { PreloadDataTypeEnum } from "./preloaddatatypeenum";
/**
 *  The input properties for the preloaded Data Store. Only data preloaded from Synthea is supported.
**/
export declare class PreloadDataConfig extends SpeakeasyBase {
    preloadDataType: PreloadDataTypeEnum;
}
