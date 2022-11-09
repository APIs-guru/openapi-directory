import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDetachInstancesActionEnum {
    DetachInstances = "DetachInstances"
}

export enum GetDetachInstancesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetDetachInstancesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDetachInstancesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InstanceIds" })
  instanceIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=ShouldDecrementDesiredCapacity" })
  shouldDecrementDesiredCapacity: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDetachInstancesVersionEnum;
}


export class GetDetachInstancesHeaders extends SpeakeasyBase {
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


export class GetDetachInstancesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDetachInstancesQueryParams;

  @Metadata()
  headers: GetDetachInstancesHeaders;
}


export class GetDetachInstancesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
