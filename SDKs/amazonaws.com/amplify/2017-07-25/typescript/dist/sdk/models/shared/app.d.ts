import { SpeakeasyBase } from "../../../internal/utils";
import { AutoBranchCreationConfig } from "./autobranchcreationconfig";
import { CustomRule } from "./customrule";
import { PlatformEnum } from "./platformenum";
import { ProductionBranch } from "./productionbranch";
/**
 *  Represents the different branches of a repository for building, deploying, and hosting an Amplify app.
**/
export declare class App extends SpeakeasyBase {
    appArn: string;
    appId: string;
    autoBranchCreationConfig?: AutoBranchCreationConfig;
    autoBranchCreationPatterns?: string[];
    basicAuthCredentials?: string;
    buildSpec?: string;
    createTime: Date;
    customHeaders?: string;
    customRules?: CustomRule[];
    defaultDomain: string;
    description: string;
    enableAutoBranchCreation?: boolean;
    enableBasicAuth: boolean;
    enableBranchAutoBuild: boolean;
    enableBranchAutoDeletion?: boolean;
    environmentVariables: Map<string, string>;
    iamServiceRoleArn?: string;
    name: string;
    platform: PlatformEnum;
    productionBranch?: ProductionBranch;
    repository: string;
    tags?: Map<string, string>;
    updateTime: Date;
}
