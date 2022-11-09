import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StartSuiteRunPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=suiteDefinitionId" })
  suiteDefinitionId: string;
}


export class StartSuiteRunHeaders extends SpeakeasyBase {
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


// StartSuiteRunRequestBodySuiteRunConfiguration
/** 
 * Gets suite run configuration.
**/
export class StartSuiteRunRequestBodySuiteRunConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=primaryDevice" })
  primaryDevice?: shared.DeviceUnderTest;

  @Metadata({ data: "json, name=selectedTestList" })
  selectedTestList?: string[];
}


export class StartSuiteRunRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=suiteDefinitionVersion" })
  suiteDefinitionVersion?: string;

  @Metadata({ data: "json, name=suiteRunConfiguration" })
  suiteRunConfiguration?: StartSuiteRunRequestBodySuiteRunConfiguration;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class StartSuiteRunRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StartSuiteRunPathParams;

  @Metadata()
  headers: StartSuiteRunHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: StartSuiteRunRequestBody;
}


export class StartSuiteRunResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  startSuiteRunResponse?: shared.StartSuiteRunResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
