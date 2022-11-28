import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteVpcEndpointServiceConfigurationsActionEnum {
    DeleteVpcEndpointServiceConfigurations = "DeleteVpcEndpointServiceConfigurations"
}

export enum GetDeleteVpcEndpointServiceConfigurationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDeleteVpcEndpointServiceConfigurationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteVpcEndpointServiceConfigurationsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ServiceId" })
  serviceId: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteVpcEndpointServiceConfigurationsVersionEnum;
}


export class GetDeleteVpcEndpointServiceConfigurationsHeaders extends SpeakeasyBase {
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


export class GetDeleteVpcEndpointServiceConfigurationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteVpcEndpointServiceConfigurationsQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteVpcEndpointServiceConfigurationsHeaders;
}


export class GetDeleteVpcEndpointServiceConfigurationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
