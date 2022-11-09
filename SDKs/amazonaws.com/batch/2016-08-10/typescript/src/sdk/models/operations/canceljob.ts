import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CancelJobHeaders extends SpeakeasyBase {
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


export class CancelJobRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobId" })
  jobId: string;

  @Metadata({ data: "json, name=reason" })
  reason: string;
}


export class CancelJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: CancelJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CancelJobRequestBody;
}


export class CancelJobResponse extends SpeakeasyBase {
  @Metadata()
  cancelJobResponse?: Map<string, any>;

  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}
