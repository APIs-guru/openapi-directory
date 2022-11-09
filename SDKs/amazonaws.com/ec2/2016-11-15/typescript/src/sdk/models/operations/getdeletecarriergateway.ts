import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteCarrierGatewayActionEnum {
    DeleteCarrierGateway = "DeleteCarrierGateway"
}

export enum GetDeleteCarrierGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDeleteCarrierGatewayQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteCarrierGatewayActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CarrierGatewayId" })
  carrierGatewayId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteCarrierGatewayVersionEnum;
}


export class GetDeleteCarrierGatewayHeaders extends SpeakeasyBase {
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


export class GetDeleteCarrierGatewayRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteCarrierGatewayQueryParams;

  @Metadata()
  headers: GetDeleteCarrierGatewayHeaders;
}


export class GetDeleteCarrierGatewayResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
