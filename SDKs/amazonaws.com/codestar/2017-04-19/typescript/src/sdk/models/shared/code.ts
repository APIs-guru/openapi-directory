import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CodeDestination } from "./codedestination";
import { CodeSource } from "./codesource";


// Code
/** 
 * Location and destination information about the source code files provided with the project request. The source code is uploaded to the new project source repository after project creation.
**/
export class Code extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination: CodeDestination;

  @Metadata({ data: "json, name=source" })
  source: CodeSource;
}
