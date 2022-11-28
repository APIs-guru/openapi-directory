import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ResolveComponentCandidatesHeaders extends SpeakeasyBase {
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


// ResolveComponentCandidatesRequestBodyPlatform
/** 
 * Contains information about a platform that a component supports.
**/
export class ResolveComponentCandidatesRequestBodyPlatform extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class ResolveComponentCandidatesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=componentCandidates", elemType: shared.ComponentCandidate })
  componentCandidates: shared.ComponentCandidate[];

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform: ResolveComponentCandidatesRequestBodyPlatform;
}


export class ResolveComponentCandidatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ResolveComponentCandidatesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ResolveComponentCandidatesRequestBody;
}


export class ResolveComponentCandidatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resolveComponentCandidatesResponse?: shared.ResolveComponentCandidatesResponse;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
