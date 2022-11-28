import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDisableVgwRoutePropagationActionEnum {
    DisableVgwRoutePropagation = "DisableVgwRoutePropagation"
}

export enum GetDisableVgwRoutePropagationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDisableVgwRoutePropagationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDisableVgwRoutePropagationActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GatewayId" })
  gatewayId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RouteTableId" })
  routeTableId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDisableVgwRoutePropagationVersionEnum;
}


export class GetDisableVgwRoutePropagationHeaders extends SpeakeasyBase {
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


export class GetDisableVgwRoutePropagationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDisableVgwRoutePropagationQueryParams;

  @SpeakeasyMetadata()
  headers: GetDisableVgwRoutePropagationHeaders;
}


export class GetDisableVgwRoutePropagationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
