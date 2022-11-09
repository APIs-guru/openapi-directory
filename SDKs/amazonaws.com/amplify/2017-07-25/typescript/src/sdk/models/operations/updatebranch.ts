import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateBranchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=branchName" })
  branchName: string;
}


export class UpdateBranchHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}

export enum UpdateBranchRequestBodyStageEnum {
    Production = "PRODUCTION"
,    Beta = "BETA"
,    Development = "DEVELOPMENT"
,    Experimental = "EXPERIMENTAL"
,    PullRequest = "PULL_REQUEST"
}


export class UpdateBranchRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=backendEnvironmentArn" })
  backendEnvironmentArn?: string;

  @Metadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: string;

  @Metadata({ data: "json, name=buildSpec" })
  buildSpec?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=enableAutoBuild" })
  enableAutoBuild?: boolean;

  @Metadata({ data: "json, name=enableBasicAuth" })
  enableBasicAuth?: boolean;

  @Metadata({ data: "json, name=enableNotification" })
  enableNotification?: boolean;

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
  stage?: UpdateBranchRequestBodyStageEnum;

  @Metadata({ data: "json, name=ttl" })
  ttl?: string;
}


export class UpdateBranchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateBranchPathParams;

  @Metadata()
  headers: UpdateBranchHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateBranchRequestBody;
}


export class UpdateBranchResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  dependentServiceFailureException?: any;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedException?: any;

  @Metadata()
  updateBranchResult?: shared.UpdateBranchResult;
}
