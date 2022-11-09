import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DecimalNumber
/** 
 * Contains a numeric value in decimal format.
**/
export class DecimalNumber extends SpeakeasyBase {
  @Metadata({ data: "json, name=Scale" })
  scale: number;

  @Metadata({ data: "json, name=UnscaledValue" })
  unscaledValue: string;
}
