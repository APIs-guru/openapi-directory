import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRebootCacheClusterActionEnum {
    RebootCacheCluster = "RebootCacheCluster"
}

export enum GetRebootCacheClusterVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetRebootCacheClusterQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRebootCacheClusterActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CacheClusterId" })
  cacheClusterId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CacheNodeIdsToReboot" })
  cacheNodeIdsToReboot: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRebootCacheClusterVersionEnum;
}


export class GetRebootCacheClusterHeaders extends SpeakeasyBase {
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


export class GetRebootCacheClusterRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRebootCacheClusterQueryParams;

  @Metadata()
  headers: GetRebootCacheClusterHeaders;
}


export class GetRebootCacheClusterResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
