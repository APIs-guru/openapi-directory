import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SkewedInfo
/** 
 * Specifies skewed values in a table. Skewed values are those that occur with very high frequency.
**/
export class SkewedInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=SkewedColumnNames" })
  skewedColumnNames?: string[];

  @Metadata({ data: "json, name=SkewedColumnValueLocationMaps" })
  skewedColumnValueLocationMaps?: Map<string, string>;

  @Metadata({ data: "json, name=SkewedColumnValues" })
  skewedColumnValues?: string[];
}
