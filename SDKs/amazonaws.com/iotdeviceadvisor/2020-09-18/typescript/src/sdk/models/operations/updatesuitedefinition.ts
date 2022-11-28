import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateSuiteDefinitionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=suiteDefinitionId" })
  suiteDefinitionId: string;
}


export class UpdateSuiteDefinitionHeaders extends SpeakeasyBase {
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


// UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration
/** 
 * Gets Suite Definition Configuration.
**/
export class UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devicePermissionRoleArn" })
  devicePermissionRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=devices", elemType: shared.DeviceUnderTest })
  devices?: shared.DeviceUnderTest[];

  @SpeakeasyMetadata({ data: "json, name=intendedForQualification" })
  intendedForQualification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rootGroup" })
  rootGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=suiteDefinitionName" })
  suiteDefinitionName?: string;
}


export class UpdateSuiteDefinitionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=suiteDefinitionConfiguration" })
  suiteDefinitionConfiguration?: UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration;
}


export class UpdateSuiteDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateSuiteDefinitionPathParams;

  @SpeakeasyMetadata()
  headers: UpdateSuiteDefinitionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateSuiteDefinitionRequestBody;
}


export class UpdateSuiteDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateSuiteDefinitionResponse?: shared.UpdateSuiteDefinitionResponse;

  @SpeakeasyMetadata()
  validationException?: any;
}
