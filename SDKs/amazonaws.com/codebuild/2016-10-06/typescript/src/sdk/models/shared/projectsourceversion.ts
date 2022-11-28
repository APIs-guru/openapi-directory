import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProjectSourceVersion
/** 
 *  A source identifier and its corresponding version. 
**/
export class ProjectSourceVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sourceIdentifier" })
  sourceIdentifier: string;

  @SpeakeasyMetadata({ data: "json, name=sourceVersion" })
  sourceVersion: string;
}
