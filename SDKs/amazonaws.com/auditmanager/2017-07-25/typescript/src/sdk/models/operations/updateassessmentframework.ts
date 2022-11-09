import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateAssessmentFrameworkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=frameworkId" })
  frameworkId: string;
}


export class UpdateAssessmentFrameworkHeaders extends SpeakeasyBase {
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


export class UpdateAssessmentFrameworkRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=complianceType" })
  complianceType?: string;

  @Metadata({ data: "json, name=controlSets", elemType: shared.UpdateAssessmentFrameworkControlSet })
  controlSets: shared.UpdateAssessmentFrameworkControlSet[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}


export class UpdateAssessmentFrameworkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateAssessmentFrameworkPathParams;

  @Metadata()
  headers: UpdateAssessmentFrameworkHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateAssessmentFrameworkRequestBody;
}


export class UpdateAssessmentFrameworkResponse extends SpeakeasyBase {
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
  updateAssessmentFrameworkResponse?: shared.UpdateAssessmentFrameworkResponse;

  @Metadata()
  validationException?: any;
}
