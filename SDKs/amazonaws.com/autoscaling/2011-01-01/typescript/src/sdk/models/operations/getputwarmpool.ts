import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetPutWarmPoolActionEnum {
    PutWarmPool = "PutWarmPool"
}

export enum GetPutWarmPoolPoolStateEnum {
    Stopped = "Stopped",
    Running = "Running"
}

export enum GetPutWarmPoolVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetPutWarmPoolQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetPutWarmPoolActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxGroupPreparedCapacity" })
  maxGroupPreparedCapacity?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MinSize" })
  minSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PoolState" })
  poolState?: GetPutWarmPoolPoolStateEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetPutWarmPoolVersionEnum;
}


export class GetPutWarmPoolHeaders extends SpeakeasyBase {
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


export class GetPutWarmPoolRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPutWarmPoolQueryParams;

  @SpeakeasyMetadata()
  headers: GetPutWarmPoolHeaders;
}


export class GetPutWarmPoolResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
