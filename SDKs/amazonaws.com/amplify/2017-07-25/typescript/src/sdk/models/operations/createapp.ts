import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateAppHeaders extends SpeakeasyBase {
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


// CreateAppRequestBodyAutoBranchCreationConfig
/** 
 *  Describes the automated branch creation configuration. 
**/
export class CreateAppRequestBodyAutoBranchCreationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: string;

  @Metadata({ data: "json, name=buildSpec" })
  buildSpec?: string;

  @Metadata({ data: "json, name=enableAutoBuild" })
  enableAutoBuild?: boolean;

  @Metadata({ data: "json, name=enableBasicAuth" })
  enableBasicAuth?: boolean;

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
  stage?: shared.StageEnum;
}

export enum CreateAppRequestBodyPlatformEnum {
    Web = "WEB"
}


export class CreateAppRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @Metadata({ data: "json, name=autoBranchCreationConfig" })
  autoBranchCreationConfig?: CreateAppRequestBodyAutoBranchCreationConfig;

  @Metadata({ data: "json, name=autoBranchCreationPatterns" })
  autoBranchCreationPatterns?: string[];

  @Metadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: string;

  @Metadata({ data: "json, name=buildSpec" })
  buildSpec?: string;

  @Metadata({ data: "json, name=customHeaders" })
  customHeaders?: string;

  @Metadata({ data: "json, name=customRules", elemType: shared.CustomRule })
  customRules?: shared.CustomRule[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=enableAutoBranchCreation" })
  enableAutoBranchCreation?: boolean;

  @Metadata({ data: "json, name=enableBasicAuth" })
  enableBasicAuth?: boolean;

  @Metadata({ data: "json, name=enableBranchAutoBuild" })
  enableBranchAutoBuild?: boolean;

  @Metadata({ data: "json, name=enableBranchAutoDeletion" })
  enableBranchAutoDeletion?: boolean;

  @Metadata({ data: "json, name=environmentVariables" })
  environmentVariables?: Map<string, string>;

  @Metadata({ data: "json, name=iamServiceRoleArn" })
  iamServiceRoleArn?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=oauthToken" })
  oauthToken?: string;

  @Metadata({ data: "json, name=platform" })
  platform?: CreateAppRequestBodyPlatformEnum;

  @Metadata({ data: "json, name=repository" })
  repository?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateAppRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateAppHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateAppRequestBody;
}


export class CreateAppResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createAppResult?: shared.CreateAppResult;

  @Metadata()
  dependentServiceFailureException?: any;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedException?: any;
}
