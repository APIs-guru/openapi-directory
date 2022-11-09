import { SpeakeasyBase } from "../../../internal/utils/utils";
import { OrderStringEnum } from "./orderstringenum";
/**
 * A field and direction for ordered output.
**/
export declare class OrderByElement extends SpeakeasyBase {
    fieldName: string;
    sortOrder?: OrderStringEnum;
}
