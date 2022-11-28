import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionRestrictionRegex } from "./optionrestrictionregex";
import { ConfigurationOptionValueTypeEnum } from "./configurationoptionvaluetypeenum";



// ConfigurationOptionDescription
/** 
 * Describes the possible values for a configuration option.
**/
export class ConfigurationOptionDescription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  changeSeverity?: string;

  @SpeakeasyMetadata()
  defaultValue?: string;

  @SpeakeasyMetadata()
  maxLength?: number;

  @SpeakeasyMetadata()
  maxValue?: number;

  @SpeakeasyMetadata()
  minValue?: number;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  namespace?: string;

  @SpeakeasyMetadata()
  regex?: OptionRestrictionRegex;

  @SpeakeasyMetadata()
  userDefined?: boolean;

  @SpeakeasyMetadata()
  valueOptions?: string[];

  @SpeakeasyMetadata()
  valueType?: ConfigurationOptionValueTypeEnum;
}
