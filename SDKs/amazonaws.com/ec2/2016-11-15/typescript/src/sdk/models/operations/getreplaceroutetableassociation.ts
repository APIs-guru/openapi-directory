import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetReplaceRouteTableAssociationActionEnum {
    ReplaceRouteTableAssociation = "ReplaceRouteTableAssociation"
}

export enum GetReplaceRouteTableAssociationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetReplaceRouteTableAssociationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetReplaceRouteTableAssociationActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AssociationId" })
  associationId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RouteTableId" })
  routeTableId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetReplaceRouteTableAssociationVersionEnum;
}


export class GetReplaceRouteTableAssociationHeaders extends SpeakeasyBase {
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


export class GetReplaceRouteTableAssociationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetReplaceRouteTableAssociationQueryParams;

  @Metadata()
  headers: GetReplaceRouteTableAssociationHeaders;
}


export class GetReplaceRouteTableAssociationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
