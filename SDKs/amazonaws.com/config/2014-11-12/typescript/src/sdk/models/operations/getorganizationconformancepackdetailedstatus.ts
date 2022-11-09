import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOrganizationConformancePackDetailedStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum GetOrganizationConformancePackDetailedStatusXAmzTargetEnum {
    StarlingDoveServiceGetOrganizationConformancePackDetailedStatus = "StarlingDoveService.GetOrganizationConformancePackDetailedStatus"
}


export class GetOrganizationConformancePackDetailedStatusHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetOrganizationConformancePackDetailedStatusXAmzTargetEnum;
}


export class GetOrganizationConformancePackDetailedStatusRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetOrganizationConformancePackDetailedStatusQueryParams;

  @Metadata()
  headers: GetOrganizationConformancePackDetailedStatusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetOrganizationConformancePackDetailedStatusRequest;
}


export class GetOrganizationConformancePackDetailedStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getOrganizationConformancePackDetailedStatusResponse?: shared.GetOrganizationConformancePackDetailedStatusResponse;

  @Metadata()
  invalidLimitException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  noSuchOrganizationConformancePackException?: any;

  @Metadata()
  organizationAccessDeniedException?: any;

  @Metadata()
  statusCode: number;
}
