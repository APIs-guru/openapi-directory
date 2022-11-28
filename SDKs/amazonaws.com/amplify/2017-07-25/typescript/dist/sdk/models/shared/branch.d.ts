import { SpeakeasyBase } from "../../../internal/utils";
import { StageEnum } from "./stageenum";
/**
 *  The branch for an Amplify app, which maps to a third-party repository branch.
**/
export declare class Branch extends SpeakeasyBase {
    activeJobId: string;
    associatedResources?: string[];
    backendEnvironmentArn?: string;
    basicAuthCredentials?: string;
    branchArn: string;
    branchName: string;
    buildSpec?: string;
    createTime: Date;
    customDomains: string[];
    description: string;
    destinationBranch?: string;
    displayName: string;
    enableAutoBuild: boolean;
    enableBasicAuth: boolean;
    enableNotification: boolean;
    enablePerformanceMode?: boolean;
    enablePullRequestPreview: boolean;
    environmentVariables: Map<string, string>;
    framework: string;
    pullRequestEnvironmentName?: string;
    sourceBranch?: string;
    stage: StageEnum;
    tags?: Map<string, string>;
    thumbnailUrl?: string;
    totalNumberOfJobs: string;
    ttl: string;
    updateTime: Date;
}
