import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteCacheClusterActionEnum {
    DeleteCacheCluster = "DeleteCacheCluster"
}

export enum GetDeleteCacheClusterVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetDeleteCacheClusterQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteCacheClusterActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CacheClusterId" })
  cacheClusterId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=FinalSnapshotIdentifier" })
  finalSnapshotIdentifier?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteCacheClusterVersionEnum;
}


export class GetDeleteCacheClusterHeaders extends SpeakeasyBase {
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


export class GetDeleteCacheClusterRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteCacheClusterQueryParams;

  @Metadata()
  headers: GetDeleteCacheClusterHeaders;
}


export class GetDeleteCacheClusterResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
