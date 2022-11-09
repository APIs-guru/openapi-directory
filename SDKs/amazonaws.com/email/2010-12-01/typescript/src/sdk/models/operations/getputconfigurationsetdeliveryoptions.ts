import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetPutConfigurationSetDeliveryOptionsActionEnum {
    PutConfigurationSetDeliveryOptions = "PutConfigurationSetDeliveryOptions"
}


// GetPutConfigurationSetDeliveryOptionsDeliveryOptions
/** 
 * Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).
**/
export class GetPutConfigurationSetDeliveryOptionsDeliveryOptions extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=TlsPolicy" })
  tlsPolicy?: shared.TlsPolicyEnum;
}

export enum GetPutConfigurationSetDeliveryOptionsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetPutConfigurationSetDeliveryOptionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetPutConfigurationSetDeliveryOptionsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ConfigurationSetName" })
  configurationSetName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DeliveryOptions" })
  deliveryOptions?: GetPutConfigurationSetDeliveryOptionsDeliveryOptions;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetPutConfigurationSetDeliveryOptionsVersionEnum;
}


export class GetPutConfigurationSetDeliveryOptionsHeaders extends SpeakeasyBase {
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


export class GetPutConfigurationSetDeliveryOptionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPutConfigurationSetDeliveryOptionsQueryParams;

  @Metadata()
  headers: GetPutConfigurationSetDeliveryOptionsHeaders;
}


export class GetPutConfigurationSetDeliveryOptionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
