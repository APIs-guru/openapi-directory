import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetUpdateConfigurationSetReputationMetricsEnabledActionEnum {
    UpdateConfigurationSetReputationMetricsEnabled = "UpdateConfigurationSetReputationMetricsEnabled"
}

export enum GetUpdateConfigurationSetReputationMetricsEnabledVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetUpdateConfigurationSetReputationMetricsEnabledQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateConfigurationSetReputationMetricsEnabledActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ConfigurationSetName" })
  configurationSetName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Enabled" })
  enabled: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateConfigurationSetReputationMetricsEnabledVersionEnum;
}


export class GetUpdateConfigurationSetReputationMetricsEnabledHeaders extends SpeakeasyBase {
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


export class GetUpdateConfigurationSetReputationMetricsEnabledRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUpdateConfigurationSetReputationMetricsEnabledQueryParams;

  @Metadata()
  headers: GetUpdateConfigurationSetReputationMetricsEnabledHeaders;
}


export class GetUpdateConfigurationSetReputationMetricsEnabledResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
