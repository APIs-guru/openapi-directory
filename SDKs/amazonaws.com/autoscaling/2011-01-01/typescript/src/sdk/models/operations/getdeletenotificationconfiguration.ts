import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteNotificationConfigurationActionEnum {
    DeleteNotificationConfiguration = "DeleteNotificationConfiguration"
}

export enum GetDeleteNotificationConfigurationVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetDeleteNotificationConfigurationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteNotificationConfigurationActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TopicARN" })
  topicArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteNotificationConfigurationVersionEnum;
}


export class GetDeleteNotificationConfigurationHeaders extends SpeakeasyBase {
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


export class GetDeleteNotificationConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteNotificationConfigurationQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteNotificationConfigurationHeaders;
}


export class GetDeleteNotificationConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
