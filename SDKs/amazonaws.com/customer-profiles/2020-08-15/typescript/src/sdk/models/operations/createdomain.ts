import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDomainPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=DomainName" })
  domainName: string;
}


export class CreateDomainHeaders extends SpeakeasyBase {
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


// CreateDomainRequestBodyMatching
/** 
 * The flag that enables the matching process of duplicate profiles.
**/
export class CreateDomainRequestBodyMatching extends SpeakeasyBase {
  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;
}


export class CreateDomainRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeadLetterQueueUrl" })
  deadLetterQueueUrl?: string;

  @Metadata({ data: "json, name=DefaultEncryptionKey" })
  defaultEncryptionKey?: string;

  @Metadata({ data: "json, name=DefaultExpirationDays" })
  defaultExpirationDays: number;

  @Metadata({ data: "json, name=Matching" })
  matching?: CreateDomainRequestBodyMatching;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}


export class CreateDomainRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateDomainPathParams;

  @Metadata()
  headers: CreateDomainHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateDomainRequestBody;
}


export class CreateDomainResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createDomainResponse?: shared.CreateDomainResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
