import { SpeakeasyBase } from "../../../internal/utils";
import { Encryption } from "./encryption";
/**
 * A source file for the input sidecar captions used during the transcoding process.
**/
export declare class CaptionSource extends SpeakeasyBase {
    encryption?: Encryption;
    key?: string;
    label?: string;
    language?: string;
    timeOffset?: string;
}
