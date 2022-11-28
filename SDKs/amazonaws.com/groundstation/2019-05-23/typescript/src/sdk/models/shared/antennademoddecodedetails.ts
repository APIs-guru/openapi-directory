import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AntennaDemodDecodeDetails
/** 
 * Details about an antenna demod decode <code>Config</code> used in a contact.
**/
export class AntennaDemodDecodeDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=outputNode" })
  outputNode?: string;
}
