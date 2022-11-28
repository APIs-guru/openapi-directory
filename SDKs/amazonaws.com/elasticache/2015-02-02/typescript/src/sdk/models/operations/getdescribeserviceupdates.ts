import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetDescribeServiceUpdatesActionEnum {
    DescribeServiceUpdates = "DescribeServiceUpdates"
}

export enum GetDescribeServiceUpdatesVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetDescribeServiceUpdatesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeServiceUpdatesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ServiceUpdateName" })
  serviceUpdateName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ServiceUpdateStatus" })
  serviceUpdateStatus?: shared.ServiceUpdateStatusEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeServiceUpdatesVersionEnum;
}


export class GetDescribeServiceUpdatesHeaders extends SpeakeasyBase {
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


export class GetDescribeServiceUpdatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeServiceUpdatesQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeServiceUpdatesHeaders;
}


export class GetDescribeServiceUpdatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
