import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetRejectVpcPeeringConnectionActionEnum {
    RejectVpcPeeringConnection = "RejectVpcPeeringConnection"
}

export enum GetRejectVpcPeeringConnectionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetRejectVpcPeeringConnectionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRejectVpcPeeringConnectionActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRejectVpcPeeringConnectionVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcPeeringConnectionId" })
  vpcPeeringConnectionId: string;
}


export class GetRejectVpcPeeringConnectionHeaders extends SpeakeasyBase {
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


export class GetRejectVpcPeeringConnectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRejectVpcPeeringConnectionQueryParams;

  @SpeakeasyMetadata()
  headers: GetRejectVpcPeeringConnectionHeaders;
}


export class GetRejectVpcPeeringConnectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
