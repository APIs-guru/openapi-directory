import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetAssociatedIpv6PoolCidrsActionEnum {
    GetAssociatedIpv6PoolCidrs = "GetAssociatedIpv6PoolCidrs"
}

export enum GetGetAssociatedIpv6PoolCidrsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetGetAssociatedIpv6PoolCidrsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetAssociatedIpv6PoolCidrsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PoolId" })
  poolId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetAssociatedIpv6PoolCidrsVersionEnum;
}


export class GetGetAssociatedIpv6PoolCidrsHeaders extends SpeakeasyBase {
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


export class GetGetAssociatedIpv6PoolCidrsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetAssociatedIpv6PoolCidrsQueryParams;

  @SpeakeasyMetadata()
  headers: GetGetAssociatedIpv6PoolCidrsHeaders;
}


export class GetGetAssociatedIpv6PoolCidrsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
