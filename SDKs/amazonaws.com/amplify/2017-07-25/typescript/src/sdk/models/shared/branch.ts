import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StageEnum } from "./stageenum";


// Branch
/** 
 *  The branch for an Amplify app, which maps to a third-party repository branch. 
**/
export class Branch extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeJobId" })
  activeJobId: string;

  @Metadata({ data: "json, name=associatedResources" })
  associatedResources?: string[];

  @Metadata({ data: "json, name=backendEnvironmentArn" })
  backendEnvironmentArn?: string;

  @Metadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: string;

  @Metadata({ data: "json, name=branchArn" })
  branchArn: string;

  @Metadata({ data: "json, name=branchName" })
  branchName: string;

  @Metadata({ data: "json, name=buildSpec" })
  buildSpec?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime: Date;

  @Metadata({ data: "json, name=customDomains" })
  customDomains: string[];

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=destinationBranch" })
  destinationBranch?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName: string;

  @Metadata({ data: "json, name=enableAutoBuild" })
  enableAutoBuild: boolean;

  @Metadata({ data: "json, name=enableBasicAuth" })
  enableBasicAuth: boolean;

  @Metadata({ data: "json, name=enableNotification" })
  enableNotification: boolean;

  @Metadata({ data: "json, name=enablePerformanceMode" })
  enablePerformanceMode?: boolean;

  @Metadata({ data: "json, name=enablePullRequestPreview" })
  enablePullRequestPreview: boolean;

  @Metadata({ data: "json, name=environmentVariables" })
  environmentVariables: Map<string, string>;

  @Metadata({ data: "json, name=framework" })
  framework: string;

  @Metadata({ data: "json, name=pullRequestEnvironmentName" })
  pullRequestEnvironmentName?: string;

  @Metadata({ data: "json, name=sourceBranch" })
  sourceBranch?: string;

  @Metadata({ data: "json, name=stage" })
  stage: StageEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=thumbnailUrl" })
  thumbnailUrl?: string;

  @Metadata({ data: "json, name=totalNumberOfJobs" })
  totalNumberOfJobs: string;

  @Metadata({ data: "json, name=ttl" })
  ttl: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime: Date;
}
