import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AntennaDemodDecodeDetails
/** 
 * Details about an antenna demod decode <code>Config</code> used in a contact.
**/
export class AntennaDemodDecodeDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=outputNode" })
  outputNode?: string;
}
