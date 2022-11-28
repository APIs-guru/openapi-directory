import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointSettingTypeValueEnum } from "./endpointsettingtypevalueenum";



// EndpointSetting
/** 
 * Endpoint settings.
**/
export class EndpointSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Applicability" })
  applicability?: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultValue" })
  defaultValue?: string;

  @SpeakeasyMetadata({ data: "json, name=EnumValues" })
  enumValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=IntValueMax" })
  intValueMax?: number;

  @SpeakeasyMetadata({ data: "json, name=IntValueMin" })
  intValueMin?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Sensitive" })
  sensitive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: EndpointSettingTypeValueEnum;

  @SpeakeasyMetadata({ data: "json, name=Units" })
  units?: string;
}
