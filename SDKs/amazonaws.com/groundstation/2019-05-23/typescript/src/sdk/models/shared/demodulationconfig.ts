import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DemodulationConfig
/** 
 * Information about the demodulation <code>Config</code>.
**/
export class DemodulationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=unvalidatedJSON" })
  unvalidatedJson: string;
}
