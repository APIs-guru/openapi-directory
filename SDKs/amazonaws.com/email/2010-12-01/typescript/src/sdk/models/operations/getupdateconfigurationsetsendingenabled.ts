import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetUpdateConfigurationSetSendingEnabledActionEnum {
    UpdateConfigurationSetSendingEnabled = "UpdateConfigurationSetSendingEnabled"
}

export enum GetUpdateConfigurationSetSendingEnabledVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetUpdateConfigurationSetSendingEnabledQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateConfigurationSetSendingEnabledActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ConfigurationSetName" })
  configurationSetName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Enabled" })
  enabled: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateConfigurationSetSendingEnabledVersionEnum;
}


export class GetUpdateConfigurationSetSendingEnabledHeaders extends SpeakeasyBase {
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


export class GetUpdateConfigurationSetSendingEnabledRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUpdateConfigurationSetSendingEnabledQueryParams;

  @Metadata()
  headers: GetUpdateConfigurationSetSendingEnabledHeaders;
}


export class GetUpdateConfigurationSetSendingEnabledResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
