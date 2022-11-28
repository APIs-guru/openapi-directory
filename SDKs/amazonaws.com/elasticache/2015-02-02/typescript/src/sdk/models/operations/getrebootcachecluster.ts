import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetRebootCacheClusterActionEnum {
    RebootCacheCluster = "RebootCacheCluster"
}

export enum GetRebootCacheClusterVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetRebootCacheClusterQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRebootCacheClusterActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CacheClusterId" })
  cacheClusterId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CacheNodeIdsToReboot" })
  cacheNodeIdsToReboot: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRebootCacheClusterVersionEnum;
}


export class GetRebootCacheClusterHeaders extends SpeakeasyBase {
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


export class GetRebootCacheClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRebootCacheClusterQueryParams;

  @SpeakeasyMetadata()
  headers: GetRebootCacheClusterHeaders;
}


export class GetRebootCacheClusterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
