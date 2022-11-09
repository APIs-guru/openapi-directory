import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteVpcEndpointConnectionNotificationsActionEnum {
    DeleteVpcEndpointConnectionNotifications = "DeleteVpcEndpointConnectionNotifications"
}

export enum GetDeleteVpcEndpointConnectionNotificationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDeleteVpcEndpointConnectionNotificationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteVpcEndpointConnectionNotificationsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ConnectionNotificationId" })
  connectionNotificationId: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteVpcEndpointConnectionNotificationsVersionEnum;
}


export class GetDeleteVpcEndpointConnectionNotificationsHeaders extends SpeakeasyBase {
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


export class GetDeleteVpcEndpointConnectionNotificationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteVpcEndpointConnectionNotificationsQueryParams;

  @Metadata()
  headers: GetDeleteVpcEndpointConnectionNotificationsHeaders;
}


export class GetDeleteVpcEndpointConnectionNotificationsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
