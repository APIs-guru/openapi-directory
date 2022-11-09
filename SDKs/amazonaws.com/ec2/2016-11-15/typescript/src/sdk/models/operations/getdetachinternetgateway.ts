import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDetachInternetGatewayActionEnum {
    DetachInternetGateway = "DetachInternetGateway"
}

export enum GetDetachInternetGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDetachInternetGatewayQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDetachInternetGatewayActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InternetGatewayId" })
  internetGatewayId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDetachInternetGatewayVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VpcId" })
  vpcId: string;
}


export class GetDetachInternetGatewayHeaders extends SpeakeasyBase {
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


export class GetDetachInternetGatewayRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDetachInternetGatewayQueryParams;

  @Metadata()
  headers: GetDetachInternetGatewayHeaders;
}


export class GetDetachInternetGatewayResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
