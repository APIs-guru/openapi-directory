import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceAuth } from "./sourceauth";
import { BuildStatusConfig } from "./buildstatusconfig";
import { GitSubmodulesConfig } from "./gitsubmodulesconfig";
import { SourceTypeEnum } from "./sourcetypeenum";



// ProjectSource
/** 
 * Information about the build input source code for the build project.
**/
export class ProjectSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auth" })
  auth?: SourceAuth;

  @SpeakeasyMetadata({ data: "json, name=buildStatusConfig" })
  buildStatusConfig?: BuildStatusConfig;

  @SpeakeasyMetadata({ data: "json, name=buildspec" })
  buildspec?: string;

  @SpeakeasyMetadata({ data: "json, name=gitCloneDepth" })
  gitCloneDepth?: number;

  @SpeakeasyMetadata({ data: "json, name=gitSubmodulesConfig" })
  gitSubmodulesConfig?: GitSubmodulesConfig;

  @SpeakeasyMetadata({ data: "json, name=insecureSsl" })
  insecureSsl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=reportBuildStatus" })
  reportBuildStatus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sourceIdentifier" })
  sourceIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: SourceTypeEnum;
}
