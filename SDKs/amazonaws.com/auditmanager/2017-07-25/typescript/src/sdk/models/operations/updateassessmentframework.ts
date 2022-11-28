import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateAssessmentFrameworkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=frameworkId" })
  frameworkId: string;
}


export class UpdateAssessmentFrameworkHeaders extends SpeakeasyBase {
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


export class UpdateAssessmentFrameworkRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=complianceType" })
  complianceType?: string;

  @SpeakeasyMetadata({ data: "json, name=controlSets", elemType: shared.UpdateAssessmentFrameworkControlSet })
  controlSets: shared.UpdateAssessmentFrameworkControlSet[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class UpdateAssessmentFrameworkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateAssessmentFrameworkPathParams;

  @SpeakeasyMetadata()
  headers: UpdateAssessmentFrameworkHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateAssessmentFrameworkRequestBody;
}


export class UpdateAssessmentFrameworkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateAssessmentFrameworkResponse?: shared.UpdateAssessmentFrameworkResponse;

  @SpeakeasyMetadata()
  validationException?: any;
}
