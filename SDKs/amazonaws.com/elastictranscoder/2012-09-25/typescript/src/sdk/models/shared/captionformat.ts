import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Encryption } from "./encryption";


// CaptionFormat
/** 
 * The file format of the output captions. If you leave this value blank, Elastic Transcoder returns an error.
**/
export class CaptionFormat extends SpeakeasyBase {
  @Metadata({ data: "json, name=Encryption" })
  encryption?: Encryption;

  @Metadata({ data: "json, name=Format" })
  format?: string;

  @Metadata({ data: "json, name=Pattern" })
  pattern?: string;
}
