import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateBranchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=branchName" })
  branchName: string;
}


export class UpdateBranchHeaders extends SpeakeasyBase {
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

export enum UpdateBranchRequestBodyStageEnum {
    Production = "PRODUCTION",
    Beta = "BETA",
    Development = "DEVELOPMENT",
    Experimental = "EXPERIMENTAL",
    PullRequest = "PULL_REQUEST"
}


export class UpdateBranchRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backendEnvironmentArn" })
  backendEnvironmentArn?: string;

  @SpeakeasyMetadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: string;

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
  stage?: UpdateBranchRequestBodyStageEnum;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: string;
}


export class UpdateBranchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateBranchPathParams;

  @SpeakeasyMetadata()
  headers: UpdateBranchHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateBranchRequestBody;
}


export class UpdateBranchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dependentServiceFailureException?: any;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unauthorizedException?: any;

  @SpeakeasyMetadata()
  updateBranchResult?: shared.UpdateBranchResult;
}
