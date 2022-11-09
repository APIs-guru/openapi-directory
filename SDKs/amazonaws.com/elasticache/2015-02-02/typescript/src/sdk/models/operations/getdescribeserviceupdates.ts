import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetDescribeServiceUpdatesActionEnum {
    DescribeServiceUpdates = "DescribeServiceUpdates"
}

export enum GetDescribeServiceUpdatesVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetDescribeServiceUpdatesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeServiceUpdatesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ServiceUpdateName" })
  serviceUpdateName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ServiceUpdateStatus" })
  serviceUpdateStatus?: shared.ServiceUpdateStatusEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeServiceUpdatesVersionEnum;
}


export class GetDescribeServiceUpdatesHeaders extends SpeakeasyBase {
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


export class GetDescribeServiceUpdatesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeServiceUpdatesQueryParams;

  @Metadata()
  headers: GetDescribeServiceUpdatesHeaders;
}


export class GetDescribeServiceUpdatesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
