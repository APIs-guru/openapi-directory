import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EndpointSettingTypeValueEnum } from "./endpointsettingtypevalueenum";


// EndpointSetting
/** 
 * Endpoint settings.
**/
export class EndpointSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=Applicability" })
  applicability?: string;

  @Metadata({ data: "json, name=DefaultValue" })
  defaultValue?: string;

  @Metadata({ data: "json, name=EnumValues" })
  enumValues?: string[];

  @Metadata({ data: "json, name=IntValueMax" })
  intValueMax?: number;

  @Metadata({ data: "json, name=IntValueMin" })
  intValueMin?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Sensitive" })
  sensitive?: boolean;

  @Metadata({ data: "json, name=Type" })
  type?: EndpointSettingTypeValueEnum;

  @Metadata({ data: "json, name=Units" })
  units?: string;
}
