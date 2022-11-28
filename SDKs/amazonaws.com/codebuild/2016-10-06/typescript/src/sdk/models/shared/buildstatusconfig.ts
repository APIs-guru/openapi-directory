import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BuildStatusConfig
/** 
 * Contains information that defines how the CodeBuild build project reports the build status to the source provider. 
**/
export class BuildStatusConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: string;

  @SpeakeasyMetadata({ data: "json, name=targetUrl" })
  targetUrl?: string;
}
