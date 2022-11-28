import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DecimalNumber
/** 
 * Contains a numeric value in decimal format.
**/
export class DecimalNumber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Scale" })
  scale: number;

  @SpeakeasyMetadata({ data: "json, name=UnscaledValue" })
  unscaledValue: string;
}
