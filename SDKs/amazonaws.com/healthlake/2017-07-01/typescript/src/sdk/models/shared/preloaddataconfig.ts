import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PreloadDataTypeEnum } from "./preloaddatatypeenum";


// PreloadDataConfig
/** 
 *  The input properties for the preloaded Data Store. Only data preloaded from Synthea is supported.
**/
export class PreloadDataConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=PreloadDataType" })
  preloadDataType: PreloadDataTypeEnum;
}
