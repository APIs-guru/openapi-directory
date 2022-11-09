import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeNotificationConfigurationsActionEnum {
    DescribeNotificationConfigurations = "DescribeNotificationConfigurations"
}

export enum GetDescribeNotificationConfigurationsVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetDescribeNotificationConfigurationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeNotificationConfigurationsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupNames" })
  autoScalingGroupNames?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeNotificationConfigurationsVersionEnum;
}


export class GetDescribeNotificationConfigurationsHeaders extends SpeakeasyBase {
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


export class GetDescribeNotificationConfigurationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeNotificationConfigurationsQueryParams;

  @Metadata()
  headers: GetDescribeNotificationConfigurationsHeaders;
}


export class GetDescribeNotificationConfigurationsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
