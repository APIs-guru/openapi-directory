import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Encryption } from "./encryption";


// CaptionSource
/** 
 * A source file for the input sidecar captions used during the transcoding process.
**/
export class CaptionSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=Encryption" })
  encryption?: Encryption;

  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=Label" })
  label?: string;

  @Metadata({ data: "json, name=Language" })
  language?: string;

  @Metadata({ data: "json, name=TimeOffset" })
  timeOffset?: string;
}
