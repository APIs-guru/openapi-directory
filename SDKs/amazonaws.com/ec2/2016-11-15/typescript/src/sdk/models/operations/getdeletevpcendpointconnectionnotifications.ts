import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteVpcEndpointConnectionNotificationsActionEnum {
    DeleteVpcEndpointConnectionNotifications = "DeleteVpcEndpointConnectionNotifications"
}

export enum GetDeleteVpcEndpointConnectionNotificationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDeleteVpcEndpointConnectionNotificationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteVpcEndpointConnectionNotificationsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConnectionNotificationId" })
  connectionNotificationId: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteVpcEndpointConnectionNotificationsVersionEnum;
}


export class GetDeleteVpcEndpointConnectionNotificationsHeaders extends SpeakeasyBase {
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


export class GetDeleteVpcEndpointConnectionNotificationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteVpcEndpointConnectionNotificationsQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteVpcEndpointConnectionNotificationsHeaders;
}


export class GetDeleteVpcEndpointConnectionNotificationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
