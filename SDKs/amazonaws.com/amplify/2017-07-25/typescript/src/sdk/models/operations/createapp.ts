import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateAppHeaders extends SpeakeasyBase {
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


// CreateAppRequestBodyAutoBranchCreationConfig
/** 
 *  Describes the automated branch creation configuration. 
**/
export class CreateAppRequestBodyAutoBranchCreationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: string;

  @SpeakeasyMetadata({ data: "json, name=buildSpec" })
  buildSpec?: string;

  @SpeakeasyMetadata({ data: "json, name=enableAutoBuild" })
  enableAutoBuild?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableBasicAuth" })
  enableBasicAuth?: boolean;

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
  stage?: shared.StageEnum;
}

export enum CreateAppRequestBodyPlatformEnum {
    Web = "WEB"
}


export class CreateAppRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=autoBranchCreationConfig" })
  autoBranchCreationConfig?: CreateAppRequestBodyAutoBranchCreationConfig;

  @SpeakeasyMetadata({ data: "json, name=autoBranchCreationPatterns" })
  autoBranchCreationPatterns?: string[];

  @SpeakeasyMetadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: string;

  @SpeakeasyMetadata({ data: "json, name=buildSpec" })
  buildSpec?: string;

  @SpeakeasyMetadata({ data: "json, name=customHeaders" })
  customHeaders?: string;

  @SpeakeasyMetadata({ data: "json, name=customRules", elemType: shared.CustomRule })
  customRules?: shared.CustomRule[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=enableAutoBranchCreation" })
  enableAutoBranchCreation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableBasicAuth" })
  enableBasicAuth?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableBranchAutoBuild" })
  enableBranchAutoBuild?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableBranchAutoDeletion" })
  enableBranchAutoDeletion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=environmentVariables" })
  environmentVariables?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=iamServiceRoleArn" })
  iamServiceRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=oauthToken" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: CreateAppRequestBodyPlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateAppRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateAppHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateAppRequestBody;
}


export class CreateAppResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createAppResult?: shared.CreateAppResult;

  @SpeakeasyMetadata()
  dependentServiceFailureException?: any;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
