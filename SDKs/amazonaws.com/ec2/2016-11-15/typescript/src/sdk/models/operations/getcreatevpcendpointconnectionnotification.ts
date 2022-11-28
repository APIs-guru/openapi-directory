import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCreateVpcEndpointConnectionNotificationActionEnum {
    CreateVpcEndpointConnectionNotification = "CreateVpcEndpointConnectionNotification"
}

export enum GetCreateVpcEndpointConnectionNotificationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetCreateVpcEndpointConnectionNotificationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateVpcEndpointConnectionNotificationActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConnectionEvents" })
  connectionEvents: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConnectionNotificationArn" })
  connectionNotificationArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ServiceId" })
  serviceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateVpcEndpointConnectionNotificationVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcEndpointId" })
  vpcEndpointId?: string;
}


export class GetCreateVpcEndpointConnectionNotificationHeaders extends SpeakeasyBase {
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


export class GetCreateVpcEndpointConnectionNotificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCreateVpcEndpointConnectionNotificationQueryParams;

  @SpeakeasyMetadata()
  headers: GetCreateVpcEndpointConnectionNotificationHeaders;
}


export class GetCreateVpcEndpointConnectionNotificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
