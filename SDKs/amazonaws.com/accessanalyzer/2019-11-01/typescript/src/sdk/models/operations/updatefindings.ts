import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateFindingsHeaders extends SpeakeasyBase {
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

export enum UpdateFindingsRequestBodyStatusEnum {
    Active = "ACTIVE"
,    Archived = "ARCHIVED"
}


export class UpdateFindingsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=analyzerArn" })
  analyzerArn: string;

  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=ids" })
  ids?: string[];

  @Metadata({ data: "json, name=resourceArn" })
  resourceArn?: string;

  @Metadata({ data: "json, name=status" })
  status: UpdateFindingsRequestBodyStatusEnum;
}


export class UpdateFindingsRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateFindingsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateFindingsRequestBody;
}


export class UpdateFindingsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
