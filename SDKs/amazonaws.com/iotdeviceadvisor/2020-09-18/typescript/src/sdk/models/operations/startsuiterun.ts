import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StartSuiteRunPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=suiteDefinitionId" })
  suiteDefinitionId: string;
}


export class StartSuiteRunHeaders extends SpeakeasyBase {
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


// StartSuiteRunRequestBodySuiteRunConfiguration
/** 
 * Gets suite run configuration.
**/
export class StartSuiteRunRequestBodySuiteRunConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=primaryDevice" })
  primaryDevice?: shared.DeviceUnderTest;

  @SpeakeasyMetadata({ data: "json, name=selectedTestList" })
  selectedTestList?: string[];
}


export class StartSuiteRunRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=suiteDefinitionVersion" })
  suiteDefinitionVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=suiteRunConfiguration" })
  suiteRunConfiguration?: StartSuiteRunRequestBodySuiteRunConfiguration;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class StartSuiteRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StartSuiteRunPathParams;

  @SpeakeasyMetadata()
  headers: StartSuiteRunHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: StartSuiteRunRequestBody;
}


export class StartSuiteRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  startSuiteRunResponse?: shared.StartSuiteRunResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
