import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SkewedInfo
/** 
 * Specifies skewed values in a table. Skewed values are those that occur with very high frequency.
**/
export class SkewedInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SkewedColumnNames" })
  skewedColumnNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=SkewedColumnValueLocationMaps" })
  skewedColumnValueLocationMaps?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=SkewedColumnValues" })
  skewedColumnValues?: string[];
}
