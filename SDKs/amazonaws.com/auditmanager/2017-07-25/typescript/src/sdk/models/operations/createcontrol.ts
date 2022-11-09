import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateControlHeaders extends SpeakeasyBase {
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


export class CreateControlRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionPlanInstructions" })
  actionPlanInstructions?: string;

  @Metadata({ data: "json, name=actionPlanTitle" })
  actionPlanTitle?: string;

  @Metadata({ data: "json, name=controlMappingSources", elemType: shared.CreateControlMappingSource })
  controlMappingSources: shared.CreateControlMappingSource[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=testingInformation" })
  testingInformation?: string;
}


export class CreateControlRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateControlHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateControlRequestBody;
}


export class CreateControlResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createControlResponse?: shared.CreateControlResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
