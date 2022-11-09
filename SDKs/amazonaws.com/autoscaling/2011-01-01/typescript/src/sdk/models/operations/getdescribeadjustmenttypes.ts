import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeAdjustmentTypesActionEnum {
    DescribeAdjustmentTypes = "DescribeAdjustmentTypes"
}

export enum GetDescribeAdjustmentTypesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetDescribeAdjustmentTypesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeAdjustmentTypesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeAdjustmentTypesVersionEnum;
}


export class GetDescribeAdjustmentTypesHeaders extends SpeakeasyBase {
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


export class GetDescribeAdjustmentTypesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeAdjustmentTypesQueryParams;

  @Metadata()
  headers: GetDescribeAdjustmentTypesHeaders;
}


export class GetDescribeAdjustmentTypesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
