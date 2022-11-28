import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteJobQueueHeaders extends SpeakeasyBase {
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


export class DeleteJobQueueRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobQueue" })
  jobQueue: string;
}


export class DeleteJobQueueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DeleteJobQueueHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: DeleteJobQueueRequestBody;
}


export class DeleteJobQueueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteJobQueueResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  serverException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
