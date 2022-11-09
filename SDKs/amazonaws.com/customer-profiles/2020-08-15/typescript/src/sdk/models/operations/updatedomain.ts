import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateDomainPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=DomainName" })
  domainName: string;
}


export class UpdateDomainHeaders extends SpeakeasyBase {
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


// UpdateDomainRequestBodyMatching
/** 
 * The flag that enables the matching process of duplicate profiles.
**/
export class UpdateDomainRequestBodyMatching extends SpeakeasyBase {
  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;
}


export class UpdateDomainRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeadLetterQueueUrl" })
  deadLetterQueueUrl?: string;

  @Metadata({ data: "json, name=DefaultEncryptionKey" })
  defaultEncryptionKey?: string;

  @Metadata({ data: "json, name=DefaultExpirationDays" })
  defaultExpirationDays?: number;

  @Metadata({ data: "json, name=Matching" })
  matching?: UpdateDomainRequestBodyMatching;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}


export class UpdateDomainRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDomainPathParams;

  @Metadata()
  headers: UpdateDomainHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateDomainRequestBody;
}


export class UpdateDomainResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateDomainResponse?: shared.UpdateDomainResponse;
}
