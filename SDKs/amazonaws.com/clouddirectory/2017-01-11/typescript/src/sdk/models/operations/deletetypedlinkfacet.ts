import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteTypedLinkFacetHeaders extends SpeakeasyBase {
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


export class DeleteTypedLinkFacetRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}


export class DeleteTypedLinkFacetRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteTypedLinkFacetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DeleteTypedLinkFacetRequestBody;
}


export class DeleteTypedLinkFacetResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteTypedLinkFacetResponse?: Map<string, any>;

  @Metadata()
  facetNotFoundException?: any;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidArnException?: any;

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
