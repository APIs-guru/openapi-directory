import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateFacetHeaders extends SpeakeasyBase {
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

export enum CreateFacetRequestBodyObjectTypeEnum {
    Node = "NODE",
    LeafNode = "LEAF_NODE",
    Policy = "POLICY",
    Index = "INDEX"
}


export class CreateFacetRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes", elemType: shared.FacetAttribute })
  attributes?: shared.FacetAttribute[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=ObjectType" })
  objectType: CreateFacetRequestBodyObjectTypeEnum;
}


export class CreateFacetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateFacetHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateFacetRequestBody;
}


export class CreateFacetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: shared.AccessDeniedException;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createFacetResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  facetAlreadyExistsException?: shared.FacetAlreadyExistsException;

  @SpeakeasyMetadata()
  facetValidationException?: shared.FacetValidationException;

  @SpeakeasyMetadata()
  internalServiceException?: shared.InternalServiceException;

  @SpeakeasyMetadata()
  invalidArnException?: shared.InvalidArnException;

  @SpeakeasyMetadata()
  invalidRuleException?: shared.InvalidRuleException;

  @SpeakeasyMetadata()
  limitExceededException?: shared.LimitExceededException;

  @SpeakeasyMetadata()
  resourceNotFoundException?: shared.ResourceNotFoundException;

  @SpeakeasyMetadata()
  retryableConflictException?: shared.RetryableConflictException;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: shared.ValidationException;
}
