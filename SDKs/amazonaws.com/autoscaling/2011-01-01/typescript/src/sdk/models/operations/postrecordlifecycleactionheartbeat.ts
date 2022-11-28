import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostRecordLifecycleActionHeartbeatActionEnum {
    RecordLifecycleActionHeartbeat = "RecordLifecycleActionHeartbeat"
}

export enum PostRecordLifecycleActionHeartbeatVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class PostRecordLifecycleActionHeartbeatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostRecordLifecycleActionHeartbeatActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostRecordLifecycleActionHeartbeatVersionEnum;
}


export class PostRecordLifecycleActionHeartbeatHeaders extends SpeakeasyBase {
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


export class PostRecordLifecycleActionHeartbeatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostRecordLifecycleActionHeartbeatQueryParams;

  @SpeakeasyMetadata()
  headers: PostRecordLifecycleActionHeartbeatHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostRecordLifecycleActionHeartbeatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
