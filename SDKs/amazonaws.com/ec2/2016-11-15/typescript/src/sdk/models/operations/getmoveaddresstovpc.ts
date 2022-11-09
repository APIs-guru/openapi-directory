import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetMoveAddressToVpcActionEnum {
    MoveAddressToVpc = "MoveAddressToVpc"
}

export enum GetMoveAddressToVpcVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetMoveAddressToVpcQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetMoveAddressToVpcActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PublicIp" })
  publicIp: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetMoveAddressToVpcVersionEnum;
}


export class GetMoveAddressToVpcHeaders extends SpeakeasyBase {
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


export class GetMoveAddressToVpcRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetMoveAddressToVpcQueryParams;

  @Metadata()
  headers: GetMoveAddressToVpcHeaders;
}


export class GetMoveAddressToVpcResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
