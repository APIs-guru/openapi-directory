import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateDomainPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainName" })
  domainName: string;
}


export class UpdateDomainHeaders extends SpeakeasyBase {
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


// UpdateDomainRequestBodyMatching
/** 
 * The flag that enables the matching process of duplicate profiles.
**/
export class UpdateDomainRequestBodyMatching extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;
}


export class UpdateDomainRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeadLetterQueueUrl" })
  deadLetterQueueUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultEncryptionKey" })
  defaultEncryptionKey?: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultExpirationDays" })
  defaultExpirationDays?: number;

  @SpeakeasyMetadata({ data: "json, name=Matching" })
  matching?: UpdateDomainRequestBodyMatching;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}


export class UpdateDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDomainPathParams;

  @SpeakeasyMetadata()
  headers: UpdateDomainHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateDomainRequestBody;
}


export class UpdateDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateDomainResponse?: shared.UpdateDomainResponse;
}
