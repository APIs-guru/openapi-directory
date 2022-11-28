import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateDomainNameHeaders extends SpeakeasyBase {
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


// CreateDomainNameRequestBodyMutualTlsAuthentication
/** 
 * The mutual TLS authentication configuration for a custom domain name.
**/
export class CreateDomainNameRequestBodyMutualTlsAuthentication extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TruststoreUri" })
  truststoreUri?: string;

  @SpeakeasyMetadata({ data: "json, name=TruststoreVersion" })
  truststoreVersion?: string;
}


export class CreateDomainNameRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "json, name=domainNameConfigurations", elemType: shared.DomainNameConfiguration })
  domainNameConfigurations?: shared.DomainNameConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=mutualTlsAuthentication" })
  mutualTlsAuthentication?: CreateDomainNameRequestBodyMutualTlsAuthentication;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateDomainNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateDomainNameHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateDomainNameRequestBody;
}


export class CreateDomainNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createDomainNameResponse?: shared.CreateDomainNameResponse;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
