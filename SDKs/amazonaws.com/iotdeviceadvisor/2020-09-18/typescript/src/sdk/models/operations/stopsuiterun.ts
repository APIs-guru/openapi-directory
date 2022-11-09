import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopSuiteRunPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=suiteDefinitionId" })
  suiteDefinitionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=suiteRunId" })
  suiteRunId: string;
}


export class StopSuiteRunHeaders extends SpeakeasyBase {
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


export class StopSuiteRunRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StopSuiteRunPathParams;

  @Metadata()
  headers: StopSuiteRunHeaders;
}


export class StopSuiteRunResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  stopSuiteRunResponse?: Map<string, any>;

  @Metadata()
  validationException?: any;
}
