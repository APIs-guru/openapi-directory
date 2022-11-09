import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListPolicyAttachmentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListPolicyAttachmentsXAmzConsistencyLevelEnum {
    Serializable = "SERIALIZABLE"
,    Eventual = "EVENTUAL"
}


export class ListPolicyAttachmentsHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=x-amz-consistency-level" })
  xAmzConsistencyLevel?: ListPolicyAttachmentsXAmzConsistencyLevelEnum;

  @Metadata({ data: "header, style=simple;explode=false;name=x-amz-data-partition" })
  xAmzDataPartition: string;
}


// ListPolicyAttachmentsRequestBodyPolicyReference
/** 
 * The reference that identifies an object.
**/
export class ListPolicyAttachmentsRequestBodyPolicyReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=Selector" })
  selector?: string;
}


export class ListPolicyAttachmentsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PolicyReference" })
  policyReference: ListPolicyAttachmentsRequestBodyPolicyReference;
}


export class ListPolicyAttachmentsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListPolicyAttachmentsQueryParams;

  @Metadata()
  headers: ListPolicyAttachmentsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListPolicyAttachmentsRequestBody;
}


export class ListPolicyAttachmentsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: shared.AccessDeniedException;

  @Metadata()
  contentType: string;

  @Metadata()
  directoryNotEnabledException?: shared.DirectoryNotEnabledException;

  @Metadata()
  internalServiceException?: shared.InternalServiceException;

  @Metadata()
  invalidArnException?: shared.InvalidArnException;

  @Metadata()
  invalidNextTokenException?: shared.InvalidNextTokenException;

  @Metadata()
  limitExceededException?: shared.LimitExceededException;

  @Metadata()
  listPolicyAttachmentsResponse?: shared.ListPolicyAttachmentsResponse;

  @Metadata()
  notPolicyException?: shared.NotPolicyException;

  @Metadata()
  resourceNotFoundException?: shared.ResourceNotFoundException;

  @Metadata()
  retryableConflictException?: shared.RetryableConflictException;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: shared.ValidationException;
}
