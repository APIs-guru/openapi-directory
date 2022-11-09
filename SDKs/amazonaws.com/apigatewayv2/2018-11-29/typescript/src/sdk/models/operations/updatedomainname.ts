import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateDomainNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class UpdateDomainNameHeaders extends SpeakeasyBase {
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


// UpdateDomainNameRequestBodyMutualTlsAuthentication
/** 
 * The mutual TLS authentication configuration for a custom domain name.
**/
export class UpdateDomainNameRequestBodyMutualTlsAuthentication extends SpeakeasyBase {
  @Metadata({ data: "json, name=TruststoreUri" })
  truststoreUri?: string;

  @Metadata({ data: "json, name=TruststoreVersion" })
  truststoreVersion?: string;
}


export class UpdateDomainNameRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainNameConfigurations", elemType: shared.DomainNameConfiguration })
  domainNameConfigurations?: shared.DomainNameConfiguration[];

  @Metadata({ data: "json, name=mutualTlsAuthentication" })
  mutualTlsAuthentication?: UpdateDomainNameRequestBodyMutualTlsAuthentication;
}


export class UpdateDomainNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDomainNamePathParams;

  @Metadata()
  headers: UpdateDomainNameHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateDomainNameRequestBody;
}


export class UpdateDomainNameResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  updateDomainNameResponse?: shared.UpdateDomainNameResponse;
}
