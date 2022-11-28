import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateAppPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;
}


export class UpdateAppHeaders extends SpeakeasyBase {
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


// UpdateAppRequestBodyAutoBranchCreationConfig
/** 
 *  Describes the automated branch creation configuration. 
**/
export class UpdateAppRequestBodyAutoBranchCreationConfig extends SpeakeasyBase {
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

export enum UpdateAppRequestBodyPlatformEnum {
    Web = "WEB"
}


export class UpdateAppRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=autoBranchCreationConfig" })
  autoBranchCreationConfig?: UpdateAppRequestBodyAutoBranchCreationConfig;

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
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=oauthToken" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: UpdateAppRequestBodyPlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository?: string;
}


export class UpdateAppRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateAppPathParams;

  @SpeakeasyMetadata()
  headers: UpdateAppHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateAppRequestBody;
}


export class UpdateAppResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unauthorizedException?: any;

  @SpeakeasyMetadata()
  updateAppResult?: shared.UpdateAppResult;
}
