import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateSuiteDefinitionHeaders extends SpeakeasyBase {
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


// CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration
/** 
 * Gets Suite Definition Configuration.
**/
export class CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration extends SpeakeasyBase {
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


export class CreateSuiteDefinitionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=suiteDefinitionConfiguration" })
  suiteDefinitionConfiguration?: CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateSuiteDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateSuiteDefinitionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateSuiteDefinitionRequestBody;
}


export class CreateSuiteDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createSuiteDefinitionResponse?: shared.CreateSuiteDefinitionResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
