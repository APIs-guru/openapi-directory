import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetMoveAddressToVpcActionEnum {
    MoveAddressToVpc = "MoveAddressToVpc"
}

export enum GetMoveAddressToVpcVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetMoveAddressToVpcQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetMoveAddressToVpcActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PublicIp" })
  publicIp: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetMoveAddressToVpcVersionEnum;
}


export class GetMoveAddressToVpcHeaders extends SpeakeasyBase {
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


export class GetMoveAddressToVpcRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMoveAddressToVpcQueryParams;

  @SpeakeasyMetadata()
  headers: GetMoveAddressToVpcHeaders;
}


export class GetMoveAddressToVpcResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
