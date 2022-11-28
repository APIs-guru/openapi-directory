import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetDescribeEnvironmentHealthActionEnum {
    DescribeEnvironmentHealth = "DescribeEnvironmentHealth"
}

export enum GetDescribeEnvironmentHealthVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDescribeEnvironmentHealthQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeEnvironmentHealthActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AttributeNames" })
  attributeNames?: shared.EnvironmentHealthAttributeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnvironmentId" })
  environmentId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnvironmentName" })
  environmentName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeEnvironmentHealthVersionEnum;
}


export class GetDescribeEnvironmentHealthHeaders extends SpeakeasyBase {
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


export class GetDescribeEnvironmentHealthRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeEnvironmentHealthQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeEnvironmentHealthHeaders;
}


export class GetDescribeEnvironmentHealthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
