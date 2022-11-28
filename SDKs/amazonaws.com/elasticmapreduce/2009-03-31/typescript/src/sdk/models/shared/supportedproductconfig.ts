import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SupportedProductConfig
/** 
 * The list of supported product configurations that allow user-supplied arguments. EMR accepts these arguments and forwards them to the corresponding installation script as bootstrap action arguments.
**/
export class SupportedProductConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Args" })
  args?: string[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
