import { SpeakeasyBase } from "../../../internal/utils";
import { DateArrayOptions } from "./datearrayoptions";
import { DateOptions } from "./dateoptions";
import { DoubleArrayOptions } from "./doublearrayoptions";
import { DoubleOptions } from "./doubleoptions";
import { IndexFieldTypeEnum } from "./indexfieldtypeenum";
import { IntArrayOptions } from "./intarrayoptions";
import { IntOptions } from "./intoptions";
import { LatLonOptions } from "./latlonoptions";
import { LiteralArrayOptions } from "./literalarrayoptions";
import { LiteralOptions } from "./literaloptions";
import { TextArrayOptions } from "./textarrayoptions";
import { TextOptions } from "./textoptions";
/**
 * Configuration information for a field in the index, including its name, type, and options. The supported options depend on the <code><a>IndexFieldType</a></code>.
**/
export declare class IndexField extends SpeakeasyBase {
    dateArrayOptions?: DateArrayOptions;
    dateOptions?: DateOptions;
    doubleArrayOptions?: DoubleArrayOptions;
    doubleOptions?: DoubleOptions;
    indexFieldName: string;
    indexFieldType: IndexFieldTypeEnum;
    intArrayOptions?: IntArrayOptions;
    intOptions?: IntOptions;
    latLonOptions?: LatLonOptions;
    literalArrayOptions?: LiteralArrayOptions;
    literalOptions?: LiteralOptions;
    textArrayOptions?: TextArrayOptions;
    textOptions?: TextOptions;
}
