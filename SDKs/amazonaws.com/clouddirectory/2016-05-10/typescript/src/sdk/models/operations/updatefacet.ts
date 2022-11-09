import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateFacetHeaders extends SpeakeasyBase {
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

export enum UpdateFacetRequestBodyObjectTypeEnum {
    Node = "NODE"
,    LeafNode = "LEAF_NODE"
,    Policy = "POLICY"
,    Index = "INDEX"
}


export class UpdateFacetRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeUpdates", elemType: shared.FacetAttributeUpdate })
  attributeUpdates?: shared.FacetAttributeUpdate[];

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=ObjectType" })
  objectType?: UpdateFacetRequestBodyObjectTypeEnum;
}


export class UpdateFacetRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateFacetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateFacetRequestBody;
}


export class UpdateFacetResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: shared.AccessDeniedException;

  @Metadata()
  contentType: string;

  @Metadata()
  facetNotFoundException?: shared.FacetNotFoundException;

  @Metadata()
  internalServiceException?: shared.InternalServiceException;

  @Metadata()
  invalidArnException?: shared.InvalidArnException;

  @Metadata()
  invalidFacetUpdateException?: shared.InvalidFacetUpdateException;

  @Metadata()
  invalidRuleException?: shared.InvalidRuleException;

  @Metadata()
  limitExceededException?: shared.LimitExceededException;

  @Metadata()
  resourceNotFoundException?: shared.ResourceNotFoundException;

  @Metadata()
  retryableConflictException?: shared.RetryableConflictException;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateFacetResponse?: Map<string, any>;

  @Metadata()
  validationException?: shared.ValidationException;
}
