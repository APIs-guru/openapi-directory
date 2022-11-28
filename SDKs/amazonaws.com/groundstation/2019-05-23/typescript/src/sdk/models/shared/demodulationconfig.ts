import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DemodulationConfig
/** 
 * Information about the demodulation <code>Config</code>.
**/
export class DemodulationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=unvalidatedJSON" })
  unvalidatedJson: string;
}
