import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateDomainNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class UpdateDomainNameHeaders extends SpeakeasyBase {
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


// UpdateDomainNameRequestBodyMutualTlsAuthentication
/** 
 * The mutual TLS authentication configuration for a custom domain name.
**/
export class UpdateDomainNameRequestBodyMutualTlsAuthentication extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TruststoreUri" })
  truststoreUri?: string;

  @SpeakeasyMetadata({ data: "json, name=TruststoreVersion" })
  truststoreVersion?: string;
}


export class UpdateDomainNameRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainNameConfigurations", elemType: shared.DomainNameConfiguration })
  domainNameConfigurations?: shared.DomainNameConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=mutualTlsAuthentication" })
  mutualTlsAuthentication?: UpdateDomainNameRequestBodyMutualTlsAuthentication;
}


export class UpdateDomainNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDomainNamePathParams;

  @SpeakeasyMetadata()
  headers: UpdateDomainNameHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateDomainNameRequestBody;
}


export class UpdateDomainNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  updateDomainNameResponse?: shared.UpdateDomainNameResponse;
}
