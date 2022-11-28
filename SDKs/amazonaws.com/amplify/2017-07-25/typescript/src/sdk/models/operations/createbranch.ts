import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateBranchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;
}


export class CreateBranchHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}

export enum CreateBranchRequestBodyStageEnum {
    Production = "PRODUCTION",
    Beta = "BETA",
    Development = "DEVELOPMENT",
    Experimental = "EXPERIMENTAL",
    PullRequest = "PULL_REQUEST"
}


export class CreateBranchRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backendEnvironmentArn" })
  backendEnvironmentArn?: string;

  @SpeakeasyMetadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: string;

  @SpeakeasyMetadata({ data: "json, name=branchName" })
  branchName: string;

  @SpeakeasyMetadata({ data: "json, name=buildSpec" })
  buildSpec?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=enableAutoBuild" })
  enableAutoBuild?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableBasicAuth" })
  enableBasicAuth?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableNotification" })
  enableNotification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enablePerformanceMode" })
  enablePerformanceMode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enablePullRequestPreview" })
  enablePullRequestPreview?: boolean;

  @SpeakeasyMetadata({ data: "json, name=environmentVariables" })
  environmentVariables?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=framework" })
  framework?: string;

  @SpeakeasyMetadata({ data: "json, name=pullRequestEnvironmentName" })
  pullRequestEnvironmentName?: string;

  @SpeakeasyMetadata({ data: "json, name=stage" })
  stage?: CreateBranchRequestBodyStageEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: string;
}


export class CreateBranchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateBranchPathParams;

  @SpeakeasyMetadata()
  headers: CreateBranchHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateBranchRequestBody;
}


export class CreateBranchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createBranchResult?: shared.CreateBranchResult;

  @SpeakeasyMetadata()
  dependentServiceFailureException?: any;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
