import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SupportedProductConfig
/** 
 * The list of supported product configurations that allow user-supplied arguments. EMR accepts these arguments and forwards them to the corresponding installation script as bootstrap action arguments.
**/
export class SupportedProductConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Args" })
  args?: string[];

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
