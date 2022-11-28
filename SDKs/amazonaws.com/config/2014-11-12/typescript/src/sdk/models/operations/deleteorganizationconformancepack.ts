import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DeleteOrganizationConformancePackXAmzTargetEnum {
    StarlingDoveServiceDeleteOrganizationConformancePack = "StarlingDoveService.DeleteOrganizationConformancePack"
}


export class DeleteOrganizationConformancePackHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteOrganizationConformancePackXAmzTargetEnum;
}


export class DeleteOrganizationConformancePackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DeleteOrganizationConformancePackHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DeleteOrganizationConformancePackRequest;
}


export class DeleteOrganizationConformancePackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  noSuchOrganizationConformancePackException?: any;

  @SpeakeasyMetadata()
  organizationAccessDeniedException?: any;

  @SpeakeasyMetadata()
  resourceInUseException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
