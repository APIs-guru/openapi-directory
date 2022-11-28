import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteConfigurationSetEventDestinationActionEnum {
    DeleteConfigurationSetEventDestination = "DeleteConfigurationSetEventDestination"
}

export enum GetDeleteConfigurationSetEventDestinationVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDeleteConfigurationSetEventDestinationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteConfigurationSetEventDestinationActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConfigurationSetName" })
  configurationSetName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EventDestinationName" })
  eventDestinationName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteConfigurationSetEventDestinationVersionEnum;
}


export class GetDeleteConfigurationSetEventDestinationHeaders extends SpeakeasyBase {
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


export class GetDeleteConfigurationSetEventDestinationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteConfigurationSetEventDestinationQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteConfigurationSetEventDestinationHeaders;
}


export class GetDeleteConfigurationSetEventDestinationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
