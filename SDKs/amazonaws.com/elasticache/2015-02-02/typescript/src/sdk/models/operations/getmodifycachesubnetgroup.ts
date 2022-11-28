import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyCacheSubnetGroupActionEnum {
    ModifyCacheSubnetGroup = "ModifyCacheSubnetGroup"
}

export enum GetModifyCacheSubnetGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetModifyCacheSubnetGroupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyCacheSubnetGroupActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CacheSubnetGroupDescription" })
  cacheSubnetGroupDescription?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CacheSubnetGroupName" })
  cacheSubnetGroupName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SubnetIds" })
  subnetIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyCacheSubnetGroupVersionEnum;
}


export class GetModifyCacheSubnetGroupHeaders extends SpeakeasyBase {
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


export class GetModifyCacheSubnetGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyCacheSubnetGroupQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyCacheSubnetGroupHeaders;
}


export class GetModifyCacheSubnetGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
