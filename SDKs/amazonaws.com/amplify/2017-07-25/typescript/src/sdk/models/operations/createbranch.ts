import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateBranchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;
}


export class CreateBranchHeaders extends SpeakeasyBase {
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

export enum CreateBranchRequestBodyStageEnum {
    Production = "PRODUCTION"
,    Beta = "BETA"
,    Development = "DEVELOPMENT"
,    Experimental = "EXPERIMENTAL"
,    PullRequest = "PULL_REQUEST"
}


export class CreateBranchRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=backendEnvironmentArn" })
  backendEnvironmentArn?: string;

  @Metadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: string;

  @Metadata({ data: "json, name=branchName" })
  branchName: string;

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
  stage?: CreateBranchRequestBodyStageEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=ttl" })
  ttl?: string;
}


export class CreateBranchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateBranchPathParams;

  @Metadata()
  headers: CreateBranchHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateBranchRequestBody;
}


export class CreateBranchResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createBranchResult?: shared.CreateBranchResult;

  @Metadata()
  dependentServiceFailureException?: any;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedException?: any;
}
