import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetBatchStopUpdateActionActionEnum {
    BatchStopUpdateAction = "BatchStopUpdateAction"
}

export enum GetBatchStopUpdateActionVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetBatchStopUpdateActionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetBatchStopUpdateActionActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CacheClusterIds" })
  cacheClusterIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReplicationGroupIds" })
  replicationGroupIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ServiceUpdateName" })
  serviceUpdateName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetBatchStopUpdateActionVersionEnum;
}


export class GetBatchStopUpdateActionHeaders extends SpeakeasyBase {
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


export class GetBatchStopUpdateActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetBatchStopUpdateActionQueryParams;

  @SpeakeasyMetadata()
  headers: GetBatchStopUpdateActionHeaders;
}


export class GetBatchStopUpdateActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
