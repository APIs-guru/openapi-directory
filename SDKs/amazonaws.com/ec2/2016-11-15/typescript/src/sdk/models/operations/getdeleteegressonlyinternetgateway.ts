import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteEgressOnlyInternetGatewayActionEnum {
    DeleteEgressOnlyInternetGateway = "DeleteEgressOnlyInternetGateway"
}

export enum GetDeleteEgressOnlyInternetGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDeleteEgressOnlyInternetGatewayQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteEgressOnlyInternetGatewayActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EgressOnlyInternetGatewayId" })
  egressOnlyInternetGatewayId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteEgressOnlyInternetGatewayVersionEnum;
}


export class GetDeleteEgressOnlyInternetGatewayHeaders extends SpeakeasyBase {
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


export class GetDeleteEgressOnlyInternetGatewayRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteEgressOnlyInternetGatewayQueryParams;

  @Metadata()
  headers: GetDeleteEgressOnlyInternetGatewayHeaders;
}


export class GetDeleteEgressOnlyInternetGatewayResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
