import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TerminateJobHeaders extends SpeakeasyBase {
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


export class TerminateJobRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobId" })
  jobId: string;

  @Metadata({ data: "json, name=reason" })
  reason: string;
}


export class TerminateJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: TerminateJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: TerminateJobRequestBody;
}


export class TerminateJobResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  terminateJobResponse?: Map<string, any>;
}
