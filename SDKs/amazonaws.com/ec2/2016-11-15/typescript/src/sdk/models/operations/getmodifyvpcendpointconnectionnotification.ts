import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyVpcEndpointConnectionNotificationActionEnum {
    ModifyVpcEndpointConnectionNotification = "ModifyVpcEndpointConnectionNotification"
}

export enum GetModifyVpcEndpointConnectionNotificationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyVpcEndpointConnectionNotificationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyVpcEndpointConnectionNotificationActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ConnectionEvents" })
  connectionEvents?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=ConnectionNotificationArn" })
  connectionNotificationArn?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ConnectionNotificationId" })
  connectionNotificationId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyVpcEndpointConnectionNotificationVersionEnum;
}


export class GetModifyVpcEndpointConnectionNotificationHeaders extends SpeakeasyBase {
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


export class GetModifyVpcEndpointConnectionNotificationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyVpcEndpointConnectionNotificationQueryParams;

  @Metadata()
  headers: GetModifyVpcEndpointConnectionNotificationHeaders;
}


export class GetModifyVpcEndpointConnectionNotificationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
