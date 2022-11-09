import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetBatchStopUpdateActionActionEnum {
    BatchStopUpdateAction = "BatchStopUpdateAction"
}

export enum GetBatchStopUpdateActionVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetBatchStopUpdateActionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetBatchStopUpdateActionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CacheClusterIds" })
  cacheClusterIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=ReplicationGroupIds" })
  replicationGroupIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=ServiceUpdateName" })
  serviceUpdateName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetBatchStopUpdateActionVersionEnum;
}


export class GetBatchStopUpdateActionHeaders extends SpeakeasyBase {
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


export class GetBatchStopUpdateActionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetBatchStopUpdateActionQueryParams;

  @Metadata()
  headers: GetBatchStopUpdateActionHeaders;
}


export class GetBatchStopUpdateActionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
