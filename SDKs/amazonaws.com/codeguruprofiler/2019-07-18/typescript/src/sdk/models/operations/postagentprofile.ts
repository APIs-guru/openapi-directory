import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAgentProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profilingGroupName" })
  profilingGroupName: string;
}


export class PostAgentProfileQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=profileToken" })
  profileToken?: string;
}


export class PostAgentProfileHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;

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


export class PostAgentProfileRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentProfile" })
  agentProfile: string;
}


export class PostAgentProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostAgentProfilePathParams;

  @SpeakeasyMetadata()
  queryParams: PostAgentProfileQueryParams;

  @SpeakeasyMetadata()
  headers: PostAgentProfileHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostAgentProfileRequestBody;
}


export class PostAgentProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  postAgentProfileResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
