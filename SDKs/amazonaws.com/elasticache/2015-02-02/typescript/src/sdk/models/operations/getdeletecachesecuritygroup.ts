import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteCacheSecurityGroupActionEnum {
    DeleteCacheSecurityGroup = "DeleteCacheSecurityGroup"
}

export enum GetDeleteCacheSecurityGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetDeleteCacheSecurityGroupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteCacheSecurityGroupActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CacheSecurityGroupName" })
  cacheSecurityGroupName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteCacheSecurityGroupVersionEnum;
}


export class GetDeleteCacheSecurityGroupHeaders extends SpeakeasyBase {
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


export class GetDeleteCacheSecurityGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteCacheSecurityGroupQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteCacheSecurityGroupHeaders;
}


export class GetDeleteCacheSecurityGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
