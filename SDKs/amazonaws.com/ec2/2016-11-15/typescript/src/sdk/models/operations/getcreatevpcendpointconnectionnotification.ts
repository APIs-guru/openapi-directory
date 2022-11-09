import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCreateVpcEndpointConnectionNotificationActionEnum {
    CreateVpcEndpointConnectionNotification = "CreateVpcEndpointConnectionNotification"
}

export enum GetCreateVpcEndpointConnectionNotificationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetCreateVpcEndpointConnectionNotificationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateVpcEndpointConnectionNotificationActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClientToken" })
  clientToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ConnectionEvents" })
  connectionEvents: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=ConnectionNotificationArn" })
  connectionNotificationArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ServiceId" })
  serviceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateVpcEndpointConnectionNotificationVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VpcEndpointId" })
  vpcEndpointId?: string;
}


export class GetCreateVpcEndpointConnectionNotificationHeaders extends SpeakeasyBase {
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


export class GetCreateVpcEndpointConnectionNotificationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCreateVpcEndpointConnectionNotificationQueryParams;

  @Metadata()
  headers: GetCreateVpcEndpointConnectionNotificationHeaders;
}


export class GetCreateVpcEndpointConnectionNotificationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
