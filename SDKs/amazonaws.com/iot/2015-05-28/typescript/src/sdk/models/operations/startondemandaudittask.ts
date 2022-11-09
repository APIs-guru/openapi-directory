import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StartOnDemandAuditTaskHeaders extends SpeakeasyBase {
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


export class StartOnDemandAuditTaskRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=targetCheckNames" })
  targetCheckNames: string[];
}


export class StartOnDemandAuditTaskRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartOnDemandAuditTaskHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: StartOnDemandAuditTaskRequestBody;
}


export class StartOnDemandAuditTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  startOnDemandAuditTaskResponse?: shared.StartOnDemandAuditTaskResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
