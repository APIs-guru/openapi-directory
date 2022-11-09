import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateSuiteDefinitionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=suiteDefinitionId" })
  suiteDefinitionId: string;
}


export class UpdateSuiteDefinitionHeaders extends SpeakeasyBase {
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


// UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration
/** 
 * Gets Suite Definition Configuration.
**/
export class UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=devicePermissionRoleArn" })
  devicePermissionRoleArn?: string;

  @Metadata({ data: "json, name=devices", elemType: shared.DeviceUnderTest })
  devices?: shared.DeviceUnderTest[];

  @Metadata({ data: "json, name=intendedForQualification" })
  intendedForQualification?: boolean;

  @Metadata({ data: "json, name=rootGroup" })
  rootGroup?: string;

  @Metadata({ data: "json, name=suiteDefinitionName" })
  suiteDefinitionName?: string;
}


export class UpdateSuiteDefinitionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=suiteDefinitionConfiguration" })
  suiteDefinitionConfiguration?: UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration;
}


export class UpdateSuiteDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateSuiteDefinitionPathParams;

  @Metadata()
  headers: UpdateSuiteDefinitionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateSuiteDefinitionRequestBody;
}


export class UpdateSuiteDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateSuiteDefinitionResponse?: shared.UpdateSuiteDefinitionResponse;

  @Metadata()
  validationException?: any;
}
