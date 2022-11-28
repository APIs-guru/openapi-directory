import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoBranchCreationConfig } from "./autobranchcreationconfig";
import { CustomRule } from "./customrule";
import { PlatformEnum } from "./platformenum";
import { ProductionBranch } from "./productionbranch";



// App
/** 
 *  Represents the different branches of a repository for building, deploying, and hosting an Amplify app. 
**/
export class App extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appArn" })
  appArn: string;

  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId: string;

  @SpeakeasyMetadata({ data: "json, name=autoBranchCreationConfig" })
  autoBranchCreationConfig?: AutoBranchCreationConfig;

  @SpeakeasyMetadata({ data: "json, name=autoBranchCreationPatterns" })
  autoBranchCreationPatterns?: string[];

  @SpeakeasyMetadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: string;

  @SpeakeasyMetadata({ data: "json, name=buildSpec" })
  buildSpec?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime: Date;

  @SpeakeasyMetadata({ data: "json, name=customHeaders" })
  customHeaders?: string;

  @SpeakeasyMetadata({ data: "json, name=customRules", elemType: CustomRule })
  customRules?: CustomRule[];

  @SpeakeasyMetadata({ data: "json, name=defaultDomain" })
  defaultDomain: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=enableAutoBranchCreation" })
  enableAutoBranchCreation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableBasicAuth" })
  enableBasicAuth: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableBranchAutoBuild" })
  enableBranchAutoBuild: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableBranchAutoDeletion" })
  enableBranchAutoDeletion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=environmentVariables" })
  environmentVariables: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=iamServiceRoleArn" })
  iamServiceRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform: PlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=productionBranch" })
  productionBranch?: ProductionBranch;

  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime: Date;
}
