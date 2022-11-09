import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * For files that are in a section, this field describes the section.
**/
export declare class FileSection extends SpeakeasyBase {
    id?: string;
}
export declare class File extends SpeakeasyBase {
    content?: string;
    contentPath?: string;
    id?: string;
    name?: string;
    section?: FileSection;
    size?: number;
}
