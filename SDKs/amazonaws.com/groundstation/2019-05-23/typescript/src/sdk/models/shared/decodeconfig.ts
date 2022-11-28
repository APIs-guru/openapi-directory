import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DecodeConfig
/** 
 * Information about the decode <code>Config</code>.
**/
export class DecodeConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=unvalidatedJSON" })
  unvalidatedJson: string;
}
