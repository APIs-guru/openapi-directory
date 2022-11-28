import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteConfigurationSetTrackingOptionsActionEnum {
    DeleteConfigurationSetTrackingOptions = "DeleteConfigurationSetTrackingOptions"
}

export enum GetDeleteConfigurationSetTrackingOptionsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDeleteConfigurationSetTrackingOptionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteConfigurationSetTrackingOptionsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConfigurationSetName" })
  configurationSetName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteConfigurationSetTrackingOptionsVersionEnum;
}


export class GetDeleteConfigurationSetTrackingOptionsHeaders extends SpeakeasyBase {
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


export class GetDeleteConfigurationSetTrackingOptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteConfigurationSetTrackingOptionsQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteConfigurationSetTrackingOptionsHeaders;
}


export class GetDeleteConfigurationSetTrackingOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
