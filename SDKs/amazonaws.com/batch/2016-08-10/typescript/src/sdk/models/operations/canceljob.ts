import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancelJobHeaders extends SpeakeasyBase {
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


export class CancelJobRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason: string;
}


export class CancelJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CancelJobHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CancelJobRequestBody;
}


export class CancelJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cancelJobResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serverException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
