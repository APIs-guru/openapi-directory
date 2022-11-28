import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetBatchApplyUpdateActionActionEnum {
    BatchApplyUpdateAction = "BatchApplyUpdateAction"
}

export enum GetBatchApplyUpdateActionVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetBatchApplyUpdateActionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetBatchApplyUpdateActionActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CacheClusterIds" })
  cacheClusterIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReplicationGroupIds" })
  replicationGroupIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ServiceUpdateName" })
  serviceUpdateName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetBatchApplyUpdateActionVersionEnum;
}


export class GetBatchApplyUpdateActionHeaders extends SpeakeasyBase {
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


export class GetBatchApplyUpdateActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetBatchApplyUpdateActionQueryParams;

  @SpeakeasyMetadata()
  headers: GetBatchApplyUpdateActionHeaders;
}


export class GetBatchApplyUpdateActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
