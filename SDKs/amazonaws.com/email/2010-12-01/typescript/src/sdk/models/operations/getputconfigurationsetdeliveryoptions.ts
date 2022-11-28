import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetPutConfigurationSetDeliveryOptionsActionEnum {
    PutConfigurationSetDeliveryOptions = "PutConfigurationSetDeliveryOptions"
}


// GetPutConfigurationSetDeliveryOptionsDeliveryOptions
/** 
 * Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).
**/
export class GetPutConfigurationSetDeliveryOptionsDeliveryOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=TlsPolicy" })
  tlsPolicy?: shared.TlsPolicyEnum;
}

export enum GetPutConfigurationSetDeliveryOptionsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetPutConfigurationSetDeliveryOptionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetPutConfigurationSetDeliveryOptionsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConfigurationSetName" })
  configurationSetName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DeliveryOptions" })
  deliveryOptions?: GetPutConfigurationSetDeliveryOptionsDeliveryOptions;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetPutConfigurationSetDeliveryOptionsVersionEnum;
}


export class GetPutConfigurationSetDeliveryOptionsHeaders extends SpeakeasyBase {
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


export class GetPutConfigurationSetDeliveryOptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPutConfigurationSetDeliveryOptionsQueryParams;

  @SpeakeasyMetadata()
  headers: GetPutConfigurationSetDeliveryOptionsHeaders;
}


export class GetPutConfigurationSetDeliveryOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
