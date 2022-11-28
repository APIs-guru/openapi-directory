import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetPutNotificationConfigurationActionEnum {
    PutNotificationConfiguration = "PutNotificationConfiguration"
}

export enum GetPutNotificationConfigurationVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetPutNotificationConfigurationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetPutNotificationConfigurationActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NotificationTypes" })
  notificationTypes: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TopicARN" })
  topicArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetPutNotificationConfigurationVersionEnum;
}


export class GetPutNotificationConfigurationHeaders extends SpeakeasyBase {
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


export class GetPutNotificationConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPutNotificationConfigurationQueryParams;

  @SpeakeasyMetadata()
  headers: GetPutNotificationConfigurationHeaders;
}


export class GetPutNotificationConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
