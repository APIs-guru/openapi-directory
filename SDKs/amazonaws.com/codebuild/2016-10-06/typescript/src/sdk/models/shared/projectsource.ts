import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SourceAuth } from "./sourceauth";
import { BuildStatusConfig } from "./buildstatusconfig";
import { GitSubmodulesConfig } from "./gitsubmodulesconfig";
import { SourceTypeEnum } from "./sourcetypeenum";


// ProjectSource
/** 
 * Information about the build input source code for the build project.
**/
export class ProjectSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=auth" })
  auth?: SourceAuth;

  @Metadata({ data: "json, name=buildStatusConfig" })
  buildStatusConfig?: BuildStatusConfig;

  @Metadata({ data: "json, name=buildspec" })
  buildspec?: string;

  @Metadata({ data: "json, name=gitCloneDepth" })
  gitCloneDepth?: number;

  @Metadata({ data: "json, name=gitSubmodulesConfig" })
  gitSubmodulesConfig?: GitSubmodulesConfig;

  @Metadata({ data: "json, name=insecureSsl" })
  insecureSsl?: boolean;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=reportBuildStatus" })
  reportBuildStatus?: boolean;

  @Metadata({ data: "json, name=sourceIdentifier" })
  sourceIdentifier?: string;

  @Metadata({ data: "json, name=type" })
  type: SourceTypeEnum;
}
