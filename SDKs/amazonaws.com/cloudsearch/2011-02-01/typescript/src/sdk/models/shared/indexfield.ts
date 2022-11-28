import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IndexFieldTypeEnum } from "./indexfieldtypeenum";
import { LiteralOptions } from "./literaloptions";
import { SourceAttribute } from "./sourceattribute";
import { TextOptions } from "./textoptions";
import { UIntOptions } from "./uintoptions";



// IndexField
/** 
 * Defines a field in the index, including its name, type, and the source of its data. The <code>IndexFieldType</code> indicates which of the options will be present. It is invalid to specify options for a type other than the <code>IndexFieldType</code>.
**/
export class IndexField extends SpeakeasyBase {
  @SpeakeasyMetadata()
  indexFieldName: string;

  @SpeakeasyMetadata()
  indexFieldType: IndexFieldTypeEnum;

  @SpeakeasyMetadata()
  literalOptions?: LiteralOptions;

  @SpeakeasyMetadata({ elemType: SourceAttribute })
  sourceAttributes?: SourceAttribute[];

  @SpeakeasyMetadata()
  textOptions?: TextOptions;

  @SpeakeasyMetadata()
  uIntOptions?: UIntOptions;
}
