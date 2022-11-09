import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeConfigurationSettingsActionEnum {
    DescribeConfigurationSettings = "DescribeConfigurationSettings"
}

export enum GetDescribeConfigurationSettingsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDescribeConfigurationSettingsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeConfigurationSettingsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EnvironmentName" })
  environmentName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TemplateName" })
  templateName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeConfigurationSettingsVersionEnum;
}


export class GetDescribeConfigurationSettingsHeaders extends SpeakeasyBase {
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


export class GetDescribeConfigurationSettingsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeConfigurationSettingsQueryParams;

  @Metadata()
  headers: GetDescribeConfigurationSettingsHeaders;
}


export class GetDescribeConfigurationSettingsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
