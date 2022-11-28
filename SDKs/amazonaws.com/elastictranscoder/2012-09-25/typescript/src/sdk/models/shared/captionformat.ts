import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Encryption } from "./encryption";



// CaptionFormat
/** 
 * The file format of the output captions. If you leave this value blank, Elastic Transcoder returns an error.
**/
export class CaptionFormat extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Encryption" })
  encryption?: Encryption;

  @SpeakeasyMetadata({ data: "json, name=Format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=Pattern" })
  pattern?: string;
}
