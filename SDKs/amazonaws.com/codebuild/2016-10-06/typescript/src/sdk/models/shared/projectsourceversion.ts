import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProjectSourceVersion
/** 
 *  A source identifier and its corresponding version. 
**/
export class ProjectSourceVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=sourceIdentifier" })
  sourceIdentifier: string;

  @Metadata({ data: "json, name=sourceVersion" })
  sourceVersion: string;
}
