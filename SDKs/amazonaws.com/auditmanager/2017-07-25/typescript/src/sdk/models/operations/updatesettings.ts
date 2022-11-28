import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateSettingsHeaders extends SpeakeasyBase {
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


// UpdateSettingsRequestBodyDefaultAssessmentReportsDestination
/** 
 *  The location in which Audit Manager saves assessment reports for the given assessment. 
**/
export class UpdateSettingsRequestBodyDefaultAssessmentReportsDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationType" })
  destinationType?: shared.AssessmentReportDestinationTypeEnum;
}


export class UpdateSettingsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultAssessmentReportsDestination" })
  defaultAssessmentReportsDestination?: UpdateSettingsRequestBodyDefaultAssessmentReportsDestination;

  @SpeakeasyMetadata({ data: "json, name=defaultProcessOwners", elemType: shared.Role })
  defaultProcessOwners?: shared.Role[];

  @SpeakeasyMetadata({ data: "json, name=kmsKey" })
  kmsKey?: string;

  @SpeakeasyMetadata({ data: "json, name=snsTopic" })
  snsTopic?: string;
}


export class UpdateSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateSettingsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateSettingsRequestBody;
}


export class UpdateSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateSettingsResponse?: shared.UpdateSettingsResponse;

  @SpeakeasyMetadata()
  validationException?: any;
}
