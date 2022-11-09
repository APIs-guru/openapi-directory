import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteQueuedReservedInstancesActionEnum {
    DeleteQueuedReservedInstances = "DeleteQueuedReservedInstances"
}

export enum GetDeleteQueuedReservedInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDeleteQueuedReservedInstancesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteQueuedReservedInstancesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ReservedInstancesId" })
  reservedInstancesId: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteQueuedReservedInstancesVersionEnum;
}


export class GetDeleteQueuedReservedInstancesHeaders extends SpeakeasyBase {
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


export class GetDeleteQueuedReservedInstancesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteQueuedReservedInstancesQueryParams;

  @Metadata()
  headers: GetDeleteQueuedReservedInstancesHeaders;
}


export class GetDeleteQueuedReservedInstancesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
