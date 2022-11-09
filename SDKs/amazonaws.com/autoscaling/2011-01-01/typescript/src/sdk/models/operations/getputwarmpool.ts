import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetPutWarmPoolActionEnum {
    PutWarmPool = "PutWarmPool"
}

export enum GetPutWarmPoolPoolStateEnum {
    Stopped = "Stopped"
,    Running = "Running"
}

export enum GetPutWarmPoolVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetPutWarmPoolQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetPutWarmPoolActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxGroupPreparedCapacity" })
  maxGroupPreparedCapacity?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MinSize" })
  minSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PoolState" })
  poolState?: GetPutWarmPoolPoolStateEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetPutWarmPoolVersionEnum;
}


export class GetPutWarmPoolHeaders extends SpeakeasyBase {
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


export class GetPutWarmPoolRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPutWarmPoolQueryParams;

  @Metadata()
  headers: GetPutWarmPoolHeaders;
}


export class GetPutWarmPoolResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
