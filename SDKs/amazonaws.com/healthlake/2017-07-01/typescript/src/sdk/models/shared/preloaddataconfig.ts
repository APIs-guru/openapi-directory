import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PreloadDataTypeEnum } from "./preloaddatatypeenum";



// PreloadDataConfig
/** 
 *  The input properties for the preloaded Data Store. Only data preloaded from Synthea is supported.
**/
export class PreloadDataConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PreloadDataType" })
  preloadDataType: PreloadDataTypeEnum;
}
