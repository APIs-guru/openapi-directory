import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateFacetHeaders extends SpeakeasyBase {
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

export enum CreateFacetRequestBodyFacetStyleEnum {
    Static = "STATIC"
,    Dynamic = "DYNAMIC"
}

export enum CreateFacetRequestBodyObjectTypeEnum {
    Node = "NODE"
,    LeafNode = "LEAF_NODE"
,    Policy = "POLICY"
,    Index = "INDEX"
}


export class CreateFacetRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes", elemType: shared.FacetAttribute })
  attributes?: shared.FacetAttribute[];

  @Metadata({ data: "json, name=FacetStyle" })
  facetStyle?: CreateFacetRequestBodyFacetStyleEnum;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=ObjectType" })
  objectType?: CreateFacetRequestBodyObjectTypeEnum;
}


export class CreateFacetRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateFacetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateFacetRequestBody;
}


export class CreateFacetResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createFacetResponse?: Map<string, any>;

  @Metadata()
  facetAlreadyExistsException?: any;

  @Metadata()
  facetValidationException?: any;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidArnException?: any;

  @Metadata()
  invalidRuleException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  retryableConflictException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
