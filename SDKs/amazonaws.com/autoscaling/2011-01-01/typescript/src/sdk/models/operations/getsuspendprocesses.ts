import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetSuspendProcessesActionEnum {
    SuspendProcesses = "SuspendProcesses"
}

export enum GetSuspendProcessesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetSuspendProcessesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSuspendProcessesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ScalingProcesses" })
  scalingProcesses?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSuspendProcessesVersionEnum;
}


export class GetSuspendProcessesHeaders extends SpeakeasyBase {
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


export class GetSuspendProcessesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSuspendProcessesQueryParams;

  @Metadata()
  headers: GetSuspendProcessesHeaders;
}


export class GetSuspendProcessesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
