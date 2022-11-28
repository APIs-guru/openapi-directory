import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteCacheClusterActionEnum {
    DeleteCacheCluster = "DeleteCacheCluster"
}

export enum GetDeleteCacheClusterVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetDeleteCacheClusterQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteCacheClusterActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CacheClusterId" })
  cacheClusterId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FinalSnapshotIdentifier" })
  finalSnapshotIdentifier?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteCacheClusterVersionEnum;
}


export class GetDeleteCacheClusterHeaders extends SpeakeasyBase {
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


export class GetDeleteCacheClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteCacheClusterQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteCacheClusterHeaders;
}


export class GetDeleteCacheClusterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
