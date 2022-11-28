import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostValidateConfigurationSettingsActionEnum {
    ValidateConfigurationSettings = "ValidateConfigurationSettings"
}

export enum PostValidateConfigurationSettingsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class PostValidateConfigurationSettingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostValidateConfigurationSettingsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostValidateConfigurationSettingsVersionEnum;
}


export class PostValidateConfigurationSettingsHeaders extends SpeakeasyBase {
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


export class PostValidateConfigurationSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostValidateConfigurationSettingsQueryParams;

  @SpeakeasyMetadata()
  headers: PostValidateConfigurationSettingsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostValidateConfigurationSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
