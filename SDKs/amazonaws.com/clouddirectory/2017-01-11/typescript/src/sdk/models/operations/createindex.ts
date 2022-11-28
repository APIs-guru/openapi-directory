import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateIndexHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-data-partition" })
  xAmzDataPartition: string;
}


// CreateIndexRequestBodyParentReference
/** 
 * The reference that identifies an object.
**/
export class CreateIndexRequestBodyParentReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Selector" })
  selector?: string;
}


export class CreateIndexRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IsUnique" })
  isUnique: boolean;

  @SpeakeasyMetadata({ data: "json, name=LinkName" })
  linkName?: string;

  @SpeakeasyMetadata({ data: "json, name=OrderedIndexedAttributeList", elemType: shared.AttributeKey })
  orderedIndexedAttributeList: shared.AttributeKey[];

  @SpeakeasyMetadata({ data: "json, name=ParentReference" })
  parentReference?: CreateIndexRequestBodyParentReference;
}


export class CreateIndexRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateIndexHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateIndexRequestBody;
}


export class CreateIndexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createIndexResponse?: shared.CreateIndexResponse;

  @SpeakeasyMetadata()
  directoryNotEnabledException?: any;

  @SpeakeasyMetadata()
  facetValidationException?: any;

  @SpeakeasyMetadata()
  internalServiceException?: any;

  @SpeakeasyMetadata()
  invalidArnException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  linkNameAlreadyInUseException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  retryableConflictException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unsupportedIndexTypeException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
