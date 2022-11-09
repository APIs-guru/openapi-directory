import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAgentProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=profilingGroupName" })
  profilingGroupName: string;
}


export class PostAgentProfileQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=profileToken" })
  profileToken?: string;
}


export class PostAgentProfileHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;

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


export class PostAgentProfileRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentProfile" })
  agentProfile: string;
}


export class PostAgentProfileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostAgentProfilePathParams;

  @Metadata()
  queryParams: PostAgentProfileQueryParams;

  @Metadata()
  headers: PostAgentProfileHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PostAgentProfileRequestBody;
}


export class PostAgentProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  postAgentProfileResponse?: Map<string, any>;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
