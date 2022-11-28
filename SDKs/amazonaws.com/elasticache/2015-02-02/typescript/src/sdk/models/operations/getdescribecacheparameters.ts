import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeCacheParametersActionEnum {
    DescribeCacheParameters = "DescribeCacheParameters"
}

export enum GetDescribeCacheParametersVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetDescribeCacheParametersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeCacheParametersActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CacheParameterGroupName" })
  cacheParameterGroupName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Source" })
  source?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeCacheParametersVersionEnum;
}


export class GetDescribeCacheParametersHeaders extends SpeakeasyBase {
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


export class GetDescribeCacheParametersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeCacheParametersQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeCacheParametersHeaders;
}


export class GetDescribeCacheParametersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
