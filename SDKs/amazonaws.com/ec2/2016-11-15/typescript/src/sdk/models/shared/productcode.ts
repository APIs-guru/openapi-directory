import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductCodeValuesEnum } from "./productcodevaluesenum";



// ProductCode
/** 
 * Describes a product code.
**/
export class ProductCode extends SpeakeasyBase {
  @SpeakeasyMetadata()
  productCodeId?: string;

  @SpeakeasyMetadata()
  productCodeType?: ProductCodeValuesEnum;
}
