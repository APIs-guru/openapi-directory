import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateAppPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;
}


export class UpdateAppHeaders extends SpeakeasyBase {
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


// UpdateAppRequestBodyAutoBranchCreationConfig
/** 
 *  Describes the automated branch creation configuration. 
**/
export class UpdateAppRequestBodyAutoBranchCreationConfig extends SpeakeasyBase {
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

export enum UpdateAppRequestBodyPlatformEnum {
    Web = "WEB"
}


export class UpdateAppRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @Metadata({ data: "json, name=autoBranchCreationConfig" })
  autoBranchCreationConfig?: UpdateAppRequestBodyAutoBranchCreationConfig;

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
  name?: string;

  @Metadata({ data: "json, name=oauthToken" })
  oauthToken?: string;

  @Metadata({ data: "json, name=platform" })
  platform?: UpdateAppRequestBodyPlatformEnum;

  @Metadata({ data: "json, name=repository" })
  repository?: string;
}


export class UpdateAppRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateAppPathParams;

  @Metadata()
  headers: UpdateAppHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateAppRequestBody;
}


export class UpdateAppResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedException?: any;

  @Metadata()
  updateAppResult?: shared.UpdateAppResult;
}
