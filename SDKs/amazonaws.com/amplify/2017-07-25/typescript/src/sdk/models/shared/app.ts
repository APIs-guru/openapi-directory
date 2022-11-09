import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutoBranchCreationConfig } from "./autobranchcreationconfig";
import { CustomRule } from "./customrule";
import { PlatformEnum } from "./platformenum";
import { ProductionBranch } from "./productionbranch";


// App
/** 
 *  Represents the different branches of a repository for building, deploying, and hosting an Amplify app. 
**/
export class App extends SpeakeasyBase {
  @Metadata({ data: "json, name=appArn" })
  appArn: string;

  @Metadata({ data: "json, name=appId" })
  appId: string;

  @Metadata({ data: "json, name=autoBranchCreationConfig" })
  autoBranchCreationConfig?: AutoBranchCreationConfig;

  @Metadata({ data: "json, name=autoBranchCreationPatterns" })
  autoBranchCreationPatterns?: string[];

  @Metadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: string;

  @Metadata({ data: "json, name=buildSpec" })
  buildSpec?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime: Date;

  @Metadata({ data: "json, name=customHeaders" })
  customHeaders?: string;

  @Metadata({ data: "json, name=customRules", elemType: shared.CustomRule })
  customRules?: CustomRule[];

  @Metadata({ data: "json, name=defaultDomain" })
  defaultDomain: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=enableAutoBranchCreation" })
  enableAutoBranchCreation?: boolean;

  @Metadata({ data: "json, name=enableBasicAuth" })
  enableBasicAuth: boolean;

  @Metadata({ data: "json, name=enableBranchAutoBuild" })
  enableBranchAutoBuild: boolean;

  @Metadata({ data: "json, name=enableBranchAutoDeletion" })
  enableBranchAutoDeletion?: boolean;

  @Metadata({ data: "json, name=environmentVariables" })
  environmentVariables: Map<string, string>;

  @Metadata({ data: "json, name=iamServiceRoleArn" })
  iamServiceRoleArn?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=platform" })
  platform: PlatformEnum;

  @Metadata({ data: "json, name=productionBranch" })
  productionBranch?: ProductionBranch;

  @Metadata({ data: "json, name=repository" })
  repository: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=updateTime" })
  updateTime: Date;
}
