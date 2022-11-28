import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Encryption } from "./encryption";



// CaptionSource
/** 
 * A source file for the input sidecar captions used during the transcoding process.
**/
export class CaptionSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Encryption" })
  encryption?: Encryption;

  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=Label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=Language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=TimeOffset" })
  timeOffset?: string;
}
