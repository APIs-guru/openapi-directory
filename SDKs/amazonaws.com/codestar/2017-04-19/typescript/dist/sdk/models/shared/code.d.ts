import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CodeDestination } from "./codedestination";
import { CodeSource } from "./codesource";
/**
 * Location and destination information about the source code files provided with the project request. The source code is uploaded to the new project source repository after project creation.
**/
export declare class Code extends SpeakeasyBase {
    destination: CodeDestination;
    source: CodeSource;
}
