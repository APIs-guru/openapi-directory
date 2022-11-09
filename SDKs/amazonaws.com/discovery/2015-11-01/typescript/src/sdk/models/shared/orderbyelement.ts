import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrderStringEnum } from "./orderstringenum";


// OrderByElement
/** 
 * A field and direction for ordered output.
**/
export class OrderByElement extends SpeakeasyBase {
  @Metadata({ data: "json, name=fieldName" })
  fieldName: string;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: OrderStringEnum;
}
