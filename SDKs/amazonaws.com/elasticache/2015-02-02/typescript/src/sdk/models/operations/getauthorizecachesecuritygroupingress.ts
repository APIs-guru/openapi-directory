import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetAuthorizeCacheSecurityGroupIngressActionEnum {
    AuthorizeCacheSecurityGroupIngress = "AuthorizeCacheSecurityGroupIngress"
}

export enum GetAuthorizeCacheSecurityGroupIngressVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetAuthorizeCacheSecurityGroupIngressQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAuthorizeCacheSecurityGroupIngressActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CacheSecurityGroupName" })
  cacheSecurityGroupName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EC2SecurityGroupName" })
  ec2SecurityGroupName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EC2SecurityGroupOwnerId" })
  ec2SecurityGroupOwnerId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAuthorizeCacheSecurityGroupIngressVersionEnum;
}


export class GetAuthorizeCacheSecurityGroupIngressHeaders extends SpeakeasyBase {
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


export class GetAuthorizeCacheSecurityGroupIngressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAuthorizeCacheSecurityGroupIngressQueryParams;

  @SpeakeasyMetadata()
  headers: GetAuthorizeCacheSecurityGroupIngressHeaders;
}


export class GetAuthorizeCacheSecurityGroupIngressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
