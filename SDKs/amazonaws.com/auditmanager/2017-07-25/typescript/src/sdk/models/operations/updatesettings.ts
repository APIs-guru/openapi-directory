import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateSettingsHeaders extends SpeakeasyBase {
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


// UpdateSettingsRequestBodyDefaultAssessmentReportsDestination
/** 
 *  The location in which Audit Manager saves assessment reports for the given assessment. 
**/
export class UpdateSettingsRequestBodyDefaultAssessmentReportsDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination?: string;

  @Metadata({ data: "json, name=destinationType" })
  destinationType?: shared.AssessmentReportDestinationTypeEnum;
}


export class UpdateSettingsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultAssessmentReportsDestination" })
  defaultAssessmentReportsDestination?: UpdateSettingsRequestBodyDefaultAssessmentReportsDestination;

  @Metadata({ data: "json, name=defaultProcessOwners", elemType: shared.Role })
  defaultProcessOwners?: shared.Role[];

  @Metadata({ data: "json, name=kmsKey" })
  kmsKey?: string;

  @Metadata({ data: "json, name=snsTopic" })
  snsTopic?: string;
}


export class UpdateSettingsRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateSettingsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateSettingsRequestBody;
}


export class UpdateSettingsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateSettingsResponse?: shared.UpdateSettingsResponse;

  @Metadata()
  validationException?: any;
}
