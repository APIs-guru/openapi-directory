import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StageEnum } from "./stageenum";



// Branch
/** 
 *  The branch for an Amplify app, which maps to a third-party repository branch. 
**/
export class Branch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeJobId" })
  activeJobId: string;

  @SpeakeasyMetadata({ data: "json, name=associatedResources" })
  associatedResources?: string[];

  @SpeakeasyMetadata({ data: "json, name=backendEnvironmentArn" })
  backendEnvironmentArn?: string;

  @SpeakeasyMetadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: string;

  @SpeakeasyMetadata({ data: "json, name=branchArn" })
  branchArn: string;

  @SpeakeasyMetadata({ data: "json, name=branchName" })
  branchName: string;

  @SpeakeasyMetadata({ data: "json, name=buildSpec" })
  buildSpec?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime: Date;

  @SpeakeasyMetadata({ data: "json, name=customDomains" })
  customDomains: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=destinationBranch" })
  destinationBranch?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=enableAutoBuild" })
  enableAutoBuild: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableBasicAuth" })
  enableBasicAuth: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableNotification" })
  enableNotification: boolean;

  @SpeakeasyMetadata({ data: "json, name=enablePerformanceMode" })
  enablePerformanceMode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enablePullRequestPreview" })
  enablePullRequestPreview: boolean;

  @SpeakeasyMetadata({ data: "json, name=environmentVariables" })
  environmentVariables: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=framework" })
  framework: string;

  @SpeakeasyMetadata({ data: "json, name=pullRequestEnvironmentName" })
  pullRequestEnvironmentName?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceBranch" })
  sourceBranch?: string;

  @SpeakeasyMetadata({ data: "json, name=stage" })
  stage: StageEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=thumbnailUrl" })
  thumbnailUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=totalNumberOfJobs" })
  totalNumberOfJobs: string;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime: Date;
}
