import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteJobQueueHeaders extends SpeakeasyBase {
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


export class DeleteJobQueueRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobQueue" })
  jobQueue: string;
}


export class DeleteJobQueueRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteJobQueueHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DeleteJobQueueRequestBody;
}


export class DeleteJobQueueResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteJobQueueResponse?: Map<string, any>;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}
