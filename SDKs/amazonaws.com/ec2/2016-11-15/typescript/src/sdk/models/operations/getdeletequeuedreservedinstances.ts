import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteQueuedReservedInstancesActionEnum {
    DeleteQueuedReservedInstances = "DeleteQueuedReservedInstances"
}

export enum GetDeleteQueuedReservedInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDeleteQueuedReservedInstancesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteQueuedReservedInstancesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReservedInstancesId" })
  reservedInstancesId: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteQueuedReservedInstancesVersionEnum;
}


export class GetDeleteQueuedReservedInstancesHeaders extends SpeakeasyBase {
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


export class GetDeleteQueuedReservedInstancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteQueuedReservedInstancesQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteQueuedReservedInstancesHeaders;
}


export class GetDeleteQueuedReservedInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
