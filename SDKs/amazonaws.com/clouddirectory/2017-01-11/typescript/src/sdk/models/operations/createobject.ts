import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateObjectHeaders extends SpeakeasyBase {
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


// CreateObjectRequestBodyParentReference
/** 
 * The reference that identifies an object.
**/
export class CreateObjectRequestBodyParentReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=Selector" })
  selector?: string;
}


export class CreateObjectRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=LinkName" })
  linkName?: string;

  @Metadata({ data: "json, name=ObjectAttributeList", elemType: shared.AttributeKeyAndValue })
  objectAttributeList?: shared.AttributeKeyAndValue[];

  @Metadata({ data: "json, name=ParentReference" })
  parentReference?: CreateObjectRequestBodyParentReference;

  @Metadata({ data: "json, name=SchemaFacets", elemType: shared.SchemaFacet })
  schemaFacets: shared.SchemaFacet[];
}


export class CreateObjectRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateObjectHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateObjectRequestBody;
}


export class CreateObjectResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createObjectResponse?: shared.CreateObjectResponse;

  @Metadata()
  directoryNotEnabledException?: any;

  @Metadata()
  facetValidationException?: any;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidArnException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  linkNameAlreadyInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  retryableConflictException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedIndexTypeException?: any;

  @Metadata()
  validationException?: any;
}
