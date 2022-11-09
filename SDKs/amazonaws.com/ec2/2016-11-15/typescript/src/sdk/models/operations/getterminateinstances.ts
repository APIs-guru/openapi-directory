import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetTerminateInstancesActionEnum {
    TerminateInstances = "TerminateInstances"
}

export enum GetTerminateInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetTerminateInstancesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetTerminateInstancesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetTerminateInstancesVersionEnum;
}


export class GetTerminateInstancesHeaders extends SpeakeasyBase {
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


export class GetTerminateInstancesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTerminateInstancesQueryParams;

  @Metadata()
  headers: GetTerminateInstancesHeaders;
}


export class GetTerminateInstancesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
