import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PutOrganizationConformancePackXAmzTargetEnum {
    StarlingDoveServicePutOrganizationConformancePack = "StarlingDoveService.PutOrganizationConformancePack"
}


export class PutOrganizationConformancePackHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: PutOrganizationConformancePackXAmzTargetEnum;
}


export class PutOrganizationConformancePackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutOrganizationConformancePackHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PutOrganizationConformancePackRequest;
}


export class PutOrganizationConformancePackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  insufficientPermissionsException?: any;

  @SpeakeasyMetadata()
  maxNumberOfOrganizationConformancePacksExceededException?: any;

  @SpeakeasyMetadata()
  noAvailableOrganizationException?: any;

  @SpeakeasyMetadata()
  organizationAccessDeniedException?: any;

  @SpeakeasyMetadata()
  organizationAllFeaturesNotEnabledException?: any;

  @SpeakeasyMetadata()
  organizationConformancePackTemplateValidationException?: any;

  @SpeakeasyMetadata()
  putOrganizationConformancePackResponse?: shared.PutOrganizationConformancePackResponse;

  @SpeakeasyMetadata()
  resourceInUseException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
