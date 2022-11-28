import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetUpdateDomainEndpointOptionsActionEnum {
    UpdateDomainEndpointOptions = "UpdateDomainEndpointOptions"
}


// GetUpdateDomainEndpointOptionsDomainEndpointOptions
/** 
 * The domain's endpoint options.
**/
export class GetUpdateDomainEndpointOptionsDomainEndpointOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=EnforceHTTPS" })
  enforceHttps?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, name=TLSSecurityPolicy" })
  tlsSecurityPolicy?: shared.TlsSecurityPolicyEnum;
}

export enum GetUpdateDomainEndpointOptionsVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}


export class GetUpdateDomainEndpointOptionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateDomainEndpointOptionsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DomainEndpointOptions" })
  domainEndpointOptions: GetUpdateDomainEndpointOptionsDomainEndpointOptions;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DomainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateDomainEndpointOptionsVersionEnum;
}


export class GetUpdateDomainEndpointOptionsHeaders extends SpeakeasyBase {
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


export class GetUpdateDomainEndpointOptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUpdateDomainEndpointOptionsQueryParams;

  @SpeakeasyMetadata()
  headers: GetUpdateDomainEndpointOptionsHeaders;
}


export class GetUpdateDomainEndpointOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
