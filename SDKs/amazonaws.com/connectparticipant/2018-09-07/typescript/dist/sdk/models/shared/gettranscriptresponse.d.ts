import { SpeakeasyBase } from "../../../internal/utils";
import { Item } from "./item";
export declare class GetTranscriptResponse extends SpeakeasyBase {
    initialContactId?: string;
    nextToken?: string;
    transcript?: Item[];
}
