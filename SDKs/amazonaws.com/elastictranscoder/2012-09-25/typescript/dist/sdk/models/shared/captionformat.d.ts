import { SpeakeasyBase } from "../../../internal/utils";
import { Encryption } from "./encryption";
/**
 * The file format of the output captions. If you leave this value blank, Elastic Transcoder returns an error.
**/
export declare class CaptionFormat extends SpeakeasyBase {
    encryption?: Encryption;
    format?: string;
    pattern?: string;
}
