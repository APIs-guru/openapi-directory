import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BuildStatusConfig
/** 
 * Contains information that defines how the CodeBuild build project reports the build status to the source provider. 
**/
export class BuildStatusConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=context" })
  context?: string;

  @Metadata({ data: "json, name=targetUrl" })
  targetUrl?: string;
}
