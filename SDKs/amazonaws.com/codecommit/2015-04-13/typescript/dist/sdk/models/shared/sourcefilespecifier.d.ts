import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a source file that is part of changes made in a commit.
**/
export declare class SourceFileSpecifier extends SpeakeasyBase {
    filePath: string;
    isMove?: boolean;
}
