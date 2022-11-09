import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ResolveComponentCandidatesHeaders extends SpeakeasyBase {
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
}


// ResolveComponentCandidatesRequestBodyPlatform
/** 
 * Contains information about a platform that a component supports.
**/
export class ResolveComponentCandidatesRequestBodyPlatform extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class ResolveComponentCandidatesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=componentCandidates", elemType: shared.ComponentCandidate })
  componentCandidates: shared.ComponentCandidate[];

  @Metadata({ data: "json, name=platform" })
  platform: ResolveComponentCandidatesRequestBodyPlatform;
}


export class ResolveComponentCandidatesRequest extends SpeakeasyBase {
  @Metadata()
  headers: ResolveComponentCandidatesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ResolveComponentCandidatesRequestBody;
}


export class ResolveComponentCandidatesResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resolveComponentCandidatesResponse?: shared.ResolveComponentCandidatesResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
