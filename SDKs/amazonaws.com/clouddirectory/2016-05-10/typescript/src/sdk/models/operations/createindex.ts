import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateIndexHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=x-amz-data-partition" })
  xAmzDataPartition: string;
}


// CreateIndexRequestBodyParentReference
/** 
 * The reference that identifies an object.
**/
export class CreateIndexRequestBodyParentReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=Selector" })
  selector?: string;
}


export class CreateIndexRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=IsUnique" })
  isUnique: boolean;

  @Metadata({ data: "json, name=LinkName" })
  linkName?: string;

  @Metadata({ data: "json, name=OrderedIndexedAttributeList", elemType: shared.AttributeKey })
  orderedIndexedAttributeList: shared.AttributeKey[];

  @Metadata({ data: "json, name=ParentReference" })
  parentReference?: CreateIndexRequestBodyParentReference;
}


export class CreateIndexRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateIndexHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateIndexRequestBody;
}


export class CreateIndexResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: shared.AccessDeniedException;

  @Metadata()
  contentType: string;

  @Metadata()
  createIndexResponse?: shared.CreateIndexResponse;

  @Metadata()
  directoryNotEnabledException?: shared.DirectoryNotEnabledException;

  @Metadata()
  facetValidationException?: shared.FacetValidationException;

  @Metadata()
  internalServiceException?: shared.InternalServiceException;

  @Metadata()
  invalidArnException?: shared.InvalidArnException;

  @Metadata()
  limitExceededException?: shared.LimitExceededException;

  @Metadata()
  linkNameAlreadyInUseException?: shared.LinkNameAlreadyInUseException;

  @Metadata()
  resourceNotFoundException?: shared.ResourceNotFoundException;

  @Metadata()
  retryableConflictException?: shared.RetryableConflictException;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedIndexTypeException?: shared.UnsupportedIndexTypeException;

  @Metadata()
  validationException?: shared.ValidationException;
}
