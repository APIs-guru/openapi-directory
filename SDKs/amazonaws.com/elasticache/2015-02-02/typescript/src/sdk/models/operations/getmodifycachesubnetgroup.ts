import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyCacheSubnetGroupActionEnum {
    ModifyCacheSubnetGroup = "ModifyCacheSubnetGroup"
}

export enum GetModifyCacheSubnetGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetModifyCacheSubnetGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyCacheSubnetGroupActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CacheSubnetGroupDescription" })
  cacheSubnetGroupDescription?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CacheSubnetGroupName" })
  cacheSubnetGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SubnetIds" })
  subnetIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyCacheSubnetGroupVersionEnum;
}


export class GetModifyCacheSubnetGroupHeaders extends SpeakeasyBase {
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


export class GetModifyCacheSubnetGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyCacheSubnetGroupQueryParams;

  @Metadata()
  headers: GetModifyCacheSubnetGroupHeaders;
}


export class GetModifyCacheSubnetGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
