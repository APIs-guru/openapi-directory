import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeConfigurationSettingsActionEnum {
    DescribeConfigurationSettings = "DescribeConfigurationSettings"
}

export enum GetDescribeConfigurationSettingsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDescribeConfigurationSettingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeConfigurationSettingsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ApplicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnvironmentName" })
  environmentName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TemplateName" })
  templateName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeConfigurationSettingsVersionEnum;
}


export class GetDescribeConfigurationSettingsHeaders extends SpeakeasyBase {
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


export class GetDescribeConfigurationSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeConfigurationSettingsQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeConfigurationSettingsHeaders;
}


export class GetDescribeConfigurationSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
