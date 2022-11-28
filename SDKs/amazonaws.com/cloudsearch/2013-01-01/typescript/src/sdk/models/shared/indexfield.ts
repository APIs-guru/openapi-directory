import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



// IndexField
/** 
 * Configuration information for a field in the index, including its name, type, and options. The supported options depend on the <code><a>IndexFieldType</a></code>.
**/
export class IndexField extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dateArrayOptions?: DateArrayOptions;

  @SpeakeasyMetadata()
  dateOptions?: DateOptions;

  @SpeakeasyMetadata()
  doubleArrayOptions?: DoubleArrayOptions;

  @SpeakeasyMetadata()
  doubleOptions?: DoubleOptions;

  @SpeakeasyMetadata()
  indexFieldName: string;

  @SpeakeasyMetadata()
  indexFieldType: IndexFieldTypeEnum;

  @SpeakeasyMetadata()
  intArrayOptions?: IntArrayOptions;

  @SpeakeasyMetadata()
  intOptions?: IntOptions;

  @SpeakeasyMetadata()
  latLonOptions?: LatLonOptions;

  @SpeakeasyMetadata()
  literalArrayOptions?: LiteralArrayOptions;

  @SpeakeasyMetadata()
  literalOptions?: LiteralOptions;

  @SpeakeasyMetadata()
  textArrayOptions?: TextArrayOptions;

  @SpeakeasyMetadata()
  textOptions?: TextOptions;
}
