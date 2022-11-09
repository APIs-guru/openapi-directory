import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCreateTransitGatewayPrefixListReferenceActionEnum {
    CreateTransitGatewayPrefixListReference = "CreateTransitGatewayPrefixListReference"
}

export enum GetCreateTransitGatewayPrefixListReferenceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetCreateTransitGatewayPrefixListReferenceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateTransitGatewayPrefixListReferenceActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Blackhole" })
  blackhole?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PrefixListId" })
  prefixListId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayAttachmentId" })
  transitGatewayAttachmentId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayRouteTableId" })
  transitGatewayRouteTableId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateTransitGatewayPrefixListReferenceVersionEnum;
}


export class GetCreateTransitGatewayPrefixListReferenceHeaders extends SpeakeasyBase {
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


export class GetCreateTransitGatewayPrefixListReferenceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCreateTransitGatewayPrefixListReferenceQueryParams;

  @Metadata()
  headers: GetCreateTransitGatewayPrefixListReferenceHeaders;
}


export class GetCreateTransitGatewayPrefixListReferenceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
