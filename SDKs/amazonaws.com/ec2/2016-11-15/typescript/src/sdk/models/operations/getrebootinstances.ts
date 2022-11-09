import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRebootInstancesActionEnum {
    RebootInstances = "RebootInstances"
}

export enum GetRebootInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetRebootInstancesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRebootInstancesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRebootInstancesVersionEnum;
}


export class GetRebootInstancesHeaders extends SpeakeasyBase {
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


export class GetRebootInstancesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRebootInstancesQueryParams;

  @Metadata()
  headers: GetRebootInstancesHeaders;
}


export class GetRebootInstancesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
