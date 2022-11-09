import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteOrganizationConformancePackXAmzTargetEnum {
    StarlingDoveServiceDeleteOrganizationConformancePack = "StarlingDoveService.DeleteOrganizationConformancePack"
}


export class DeleteOrganizationConformancePackHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DeleteOrganizationConformancePackXAmzTargetEnum;
}


export class DeleteOrganizationConformancePackRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteOrganizationConformancePackHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteOrganizationConformancePackRequest;
}


export class DeleteOrganizationConformancePackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  noSuchOrganizationConformancePackException?: any;

  @Metadata()
  organizationAccessDeniedException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  statusCode: number;
}
