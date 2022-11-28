import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PlatformProgrammingLanguage
/** 
 * A programming language supported by the platform.
**/
export class PlatformProgrammingLanguage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  version?: string;
}
