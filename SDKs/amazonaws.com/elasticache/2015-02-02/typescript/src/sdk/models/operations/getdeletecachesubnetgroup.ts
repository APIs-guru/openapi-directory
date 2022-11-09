import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteCacheSubnetGroupActionEnum {
    DeleteCacheSubnetGroup = "DeleteCacheSubnetGroup"
}

export enum GetDeleteCacheSubnetGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetDeleteCacheSubnetGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteCacheSubnetGroupActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CacheSubnetGroupName" })
  cacheSubnetGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteCacheSubnetGroupVersionEnum;
}


export class GetDeleteCacheSubnetGroupHeaders extends SpeakeasyBase {
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


export class GetDeleteCacheSubnetGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteCacheSubnetGroupQueryParams;

  @Metadata()
  headers: GetDeleteCacheSubnetGroupHeaders;
}


export class GetDeleteCacheSubnetGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
