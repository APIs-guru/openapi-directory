import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetDescribeInstancesHealthActionEnum {
    DescribeInstancesHealth = "DescribeInstancesHealth"
}

export enum GetDescribeInstancesHealthVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDescribeInstancesHealthQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeInstancesHealthActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AttributeNames" })
  attributeNames?: shared.InstancesHealthAttributeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnvironmentId" })
  environmentId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnvironmentName" })
  environmentName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeInstancesHealthVersionEnum;
}


export class GetDescribeInstancesHealthHeaders extends SpeakeasyBase {
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


export class GetDescribeInstancesHealthRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeInstancesHealthQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeInstancesHealthHeaders;
}


export class GetDescribeInstancesHealthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
