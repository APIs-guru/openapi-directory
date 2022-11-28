import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetDescribeConfigurationSetActionEnum {
    DescribeConfigurationSet = "DescribeConfigurationSet"
}

export enum GetDescribeConfigurationSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDescribeConfigurationSetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeConfigurationSetActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConfigurationSetAttributeNames" })
  configurationSetAttributeNames?: shared.ConfigurationSetAttributeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConfigurationSetName" })
  configurationSetName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeConfigurationSetVersionEnum;
}


export class GetDescribeConfigurationSetHeaders extends SpeakeasyBase {
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


export class GetDescribeConfigurationSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeConfigurationSetQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeConfigurationSetHeaders;
}


export class GetDescribeConfigurationSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
