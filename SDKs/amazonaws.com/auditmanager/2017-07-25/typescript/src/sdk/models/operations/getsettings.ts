import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetSettingsAttributeEnum {
    All = "ALL",
    IsAwsOrgEnabled = "IS_AWS_ORG_ENABLED",
    SnsTopic = "SNS_TOPIC",
    DefaultAssessmentReportsDestination = "DEFAULT_ASSESSMENT_REPORTS_DESTINATION",
    DefaultProcessOwners = "DEFAULT_PROCESS_OWNERS"
}


export class GetSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attribute" })
  attribute: GetSettingsAttributeEnum;
}


export class GetSettingsHeaders extends SpeakeasyBase {
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


export class GetSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSettingsPathParams;

  @SpeakeasyMetadata()
  headers: GetSettingsHeaders;
}


export class GetSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSettingsResponse?: shared.GetSettingsResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
