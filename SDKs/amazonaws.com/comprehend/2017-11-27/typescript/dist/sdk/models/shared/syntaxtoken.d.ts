import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PartOfSpeechTag } from "./partofspeechtag";
/**
 * Represents a work in the input text that was recognized and assigned a part of speech. There is one syntax token record for each word in the source text.
**/
export declare class SyntaxToken extends SpeakeasyBase {
    beginOffset?: number;
    endOffset?: number;
    partOfSpeech?: PartOfSpeechTag;
    text?: string;
    tokenId?: number;
}
