import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderStringEnum } from "./orderstringenum";



// OrderByElement
/** 
 * A field and direction for ordered output.
**/
export class OrderByElement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fieldName" })
  fieldName: string;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: OrderStringEnum;
}
