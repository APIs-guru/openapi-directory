import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetDescribeInstancesHealthActionEnum {
    DescribeInstancesHealth = "DescribeInstancesHealth"
}

export enum GetDescribeInstancesHealthVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDescribeInstancesHealthQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeInstancesHealthActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AttributeNames" })
  attributeNames?: shared.InstancesHealthAttributeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=EnvironmentId" })
  environmentId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EnvironmentName" })
  environmentName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeInstancesHealthVersionEnum;
}


export class GetDescribeInstancesHealthHeaders extends SpeakeasyBase {
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


export class GetDescribeInstancesHealthRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeInstancesHealthQueryParams;

  @Metadata()
  headers: GetDescribeInstancesHealthHeaders;
}


export class GetDescribeInstancesHealthResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
