import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DecodeConfig
/** 
 * Information about the decode <code>Config</code>.
**/
export class DecodeConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=unvalidatedJSON" })
  unvalidatedJson: string;
}
