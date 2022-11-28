import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopSuiteRunPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=suiteDefinitionId" })
  suiteDefinitionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=suiteRunId" })
  suiteRunId: string;
}


export class StopSuiteRunHeaders extends SpeakeasyBase {
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


export class StopSuiteRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StopSuiteRunPathParams;

  @SpeakeasyMetadata()
  headers: StopSuiteRunHeaders;
}


export class StopSuiteRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  stopSuiteRunResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  validationException?: any;
}
