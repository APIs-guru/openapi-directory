import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRevokeCacheSecurityGroupIngressActionEnum {
    RevokeCacheSecurityGroupIngress = "RevokeCacheSecurityGroupIngress"
}

export enum GetRevokeCacheSecurityGroupIngressVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetRevokeCacheSecurityGroupIngressQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRevokeCacheSecurityGroupIngressActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CacheSecurityGroupName" })
  cacheSecurityGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EC2SecurityGroupName" })
  ec2SecurityGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EC2SecurityGroupOwnerId" })
  ec2SecurityGroupOwnerId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRevokeCacheSecurityGroupIngressVersionEnum;
}


export class GetRevokeCacheSecurityGroupIngressHeaders extends SpeakeasyBase {
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


export class GetRevokeCacheSecurityGroupIngressRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRevokeCacheSecurityGroupIngressQueryParams;

  @Metadata()
  headers: GetRevokeCacheSecurityGroupIngressHeaders;
}


export class GetRevokeCacheSecurityGroupIngressResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
