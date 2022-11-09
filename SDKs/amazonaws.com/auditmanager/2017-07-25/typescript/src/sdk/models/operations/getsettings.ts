import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetSettingsAttributeEnum {
    All = "ALL"
,    IsAwsOrgEnabled = "IS_AWS_ORG_ENABLED"
,    SnsTopic = "SNS_TOPIC"
,    DefaultAssessmentReportsDestination = "DEFAULT_ASSESSMENT_REPORTS_DESTINATION"
,    DefaultProcessOwners = "DEFAULT_PROCESS_OWNERS"
}


export class GetSettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=attribute" })
  attribute: GetSettingsAttributeEnum;
}


export class GetSettingsHeaders extends SpeakeasyBase {
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


export class GetSettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSettingsPathParams;

  @Metadata()
  headers: GetSettingsHeaders;
}


export class GetSettingsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getSettingsResponse?: shared.GetSettingsResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  statusCode: number;
}
