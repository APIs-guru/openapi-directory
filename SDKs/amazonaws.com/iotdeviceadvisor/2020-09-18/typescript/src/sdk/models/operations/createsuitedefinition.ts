import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateSuiteDefinitionHeaders extends SpeakeasyBase {
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


// CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration
/** 
 * Gets Suite Definition Configuration.
**/
export class CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration extends SpeakeasyBase {
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


export class CreateSuiteDefinitionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=suiteDefinitionConfiguration" })
  suiteDefinitionConfiguration?: CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateSuiteDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateSuiteDefinitionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateSuiteDefinitionRequestBody;
}


export class CreateSuiteDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createSuiteDefinitionResponse?: shared.CreateSuiteDefinitionResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
