import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeEnvironmentManagedActionsActionEnum {
    DescribeEnvironmentManagedActions = "DescribeEnvironmentManagedActions"
}

export enum GetDescribeEnvironmentManagedActionsStatusEnum {
    Scheduled = "Scheduled"
,    Pending = "Pending"
,    Running = "Running"
,    Unknown = "Unknown"
}

export enum GetDescribeEnvironmentManagedActionsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDescribeEnvironmentManagedActionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeEnvironmentManagedActionsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EnvironmentId" })
  environmentId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EnvironmentName" })
  environmentName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: GetDescribeEnvironmentManagedActionsStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeEnvironmentManagedActionsVersionEnum;
}


export class GetDescribeEnvironmentManagedActionsHeaders extends SpeakeasyBase {
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


export class GetDescribeEnvironmentManagedActionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeEnvironmentManagedActionsQueryParams;

  @Metadata()
  headers: GetDescribeEnvironmentManagedActionsHeaders;
}


export class GetDescribeEnvironmentManagedActionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
