import { SpeakeasyBase } from "../../../internal/utils";
import { LoaContentTypeEnum } from "./loacontenttypeenum";
/**
 * Information about a Letter of Authorization - Connecting Facility Assignment (LOA-CFA) for a connection.
**/
export declare class Loa extends SpeakeasyBase {
    loaContent?: string;
    loaContentType?: LoaContentTypeEnum;
}
