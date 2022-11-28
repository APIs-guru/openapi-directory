import { SpeakeasyBase } from "../../../internal/utils";
import { SourceAuth } from "./sourceauth";
import { BuildStatusConfig } from "./buildstatusconfig";
import { GitSubmodulesConfig } from "./gitsubmodulesconfig";
import { SourceTypeEnum } from "./sourcetypeenum";
/**
 * Information about the build input source code for the build project.
**/
export declare class ProjectSource extends SpeakeasyBase {
    auth?: SourceAuth;
    buildStatusConfig?: BuildStatusConfig;
    buildspec?: string;
    gitCloneDepth?: number;
    gitSubmodulesConfig?: GitSubmodulesConfig;
    insecureSsl?: boolean;
    location?: string;
    reportBuildStatus?: boolean;
    sourceIdentifier?: string;
    type: SourceTypeEnum;
}
