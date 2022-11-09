import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetDescribeConfigurationSetActionEnum {
    DescribeConfigurationSet = "DescribeConfigurationSet"
}

export enum GetDescribeConfigurationSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDescribeConfigurationSetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeConfigurationSetActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ConfigurationSetAttributeNames" })
  configurationSetAttributeNames?: shared.ConfigurationSetAttributeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=ConfigurationSetName" })
  configurationSetName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeConfigurationSetVersionEnum;
}


export class GetDescribeConfigurationSetHeaders extends SpeakeasyBase {
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


export class GetDescribeConfigurationSetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeConfigurationSetQueryParams;

  @Metadata()
  headers: GetDescribeConfigurationSetHeaders;
}


export class GetDescribeConfigurationSetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
