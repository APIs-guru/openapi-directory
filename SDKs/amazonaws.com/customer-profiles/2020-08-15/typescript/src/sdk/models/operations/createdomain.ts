import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateDomainPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainName" })
  domainName: string;
}


export class CreateDomainHeaders extends SpeakeasyBase {
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


// CreateDomainRequestBodyMatching
/** 
 * The flag that enables the matching process of duplicate profiles.
**/
export class CreateDomainRequestBodyMatching extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;
}


export class CreateDomainRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeadLetterQueueUrl" })
  deadLetterQueueUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultEncryptionKey" })
  defaultEncryptionKey?: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultExpirationDays" })
  defaultExpirationDays: number;

  @SpeakeasyMetadata({ data: "json, name=Matching" })
  matching?: CreateDomainRequestBodyMatching;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}


export class CreateDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateDomainPathParams;

  @SpeakeasyMetadata()
  headers: CreateDomainHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateDomainRequestBody;
}


export class CreateDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createDomainResponse?: shared.CreateDomainResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
