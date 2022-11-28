import { SpeakeasyBase } from "../../../internal/utils";
import { StageEnum } from "./stageenum";
/**
 *  Describes the automated branch creation configuration.
**/
export declare class AutoBranchCreationConfig extends SpeakeasyBase {
    basicAuthCredentials?: string;
    buildSpec?: string;
    enableAutoBuild?: boolean;
    enableBasicAuth?: boolean;
    enablePerformanceMode?: boolean;
    enablePullRequestPreview?: boolean;
    environmentVariables?: Map<string, string>;
    framework?: string;
    pullRequestEnvironmentName?: string;
    stage?: StageEnum;
}
