import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StageEnum } from "./stageenum";


// AutoBranchCreationConfig
/** 
 *  Describes the automated branch creation configuration. 
**/
export class AutoBranchCreationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: string;

  @Metadata({ data: "json, name=buildSpec" })
  buildSpec?: string;

  @Metadata({ data: "json, name=enableAutoBuild" })
  enableAutoBuild?: boolean;

  @Metadata({ data: "json, name=enableBasicAuth" })
  enableBasicAuth?: boolean;

  @Metadata({ data: "json, name=enablePerformanceMode" })
  enablePerformanceMode?: boolean;

  @Metadata({ data: "json, name=enablePullRequestPreview" })
  enablePullRequestPreview?: boolean;

  @Metadata({ data: "json, name=environmentVariables" })
  environmentVariables?: Map<string, string>;

  @Metadata({ data: "json, name=framework" })
  framework?: string;

  @Metadata({ data: "json, name=pullRequestEnvironmentName" })
  pullRequestEnvironmentName?: string;

  @Metadata({ data: "json, name=stage" })
  stage?: StageEnum;
}
