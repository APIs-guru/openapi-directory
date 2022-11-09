import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDomainNameHeaders extends SpeakeasyBase {
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


// CreateDomainNameRequestBodyMutualTlsAuthentication
/** 
 * The mutual TLS authentication configuration for a custom domain name.
**/
export class CreateDomainNameRequestBodyMutualTlsAuthentication extends SpeakeasyBase {
  @Metadata({ data: "json, name=TruststoreUri" })
  truststoreUri?: string;

  @Metadata({ data: "json, name=TruststoreVersion" })
  truststoreVersion?: string;
}


export class CreateDomainNameRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainName" })
  domainName: string;

  @Metadata({ data: "json, name=domainNameConfigurations", elemType: shared.DomainNameConfiguration })
  domainNameConfigurations?: shared.DomainNameConfiguration[];

  @Metadata({ data: "json, name=mutualTlsAuthentication" })
  mutualTlsAuthentication?: CreateDomainNameRequestBodyMutualTlsAuthentication;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateDomainNameRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateDomainNameHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateDomainNameRequestBody;
}


export class CreateDomainNameResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createDomainNameResponse?: shared.CreateDomainNameResponse;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
