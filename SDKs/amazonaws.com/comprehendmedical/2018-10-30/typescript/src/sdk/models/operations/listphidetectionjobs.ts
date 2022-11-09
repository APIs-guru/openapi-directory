import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListPhiDetectionJobsXAmzTargetEnum {
    ComprehendMedical20181030ListPhiDetectionJobs = "ComprehendMedical_20181030.ListPHIDetectionJobs"
}


export class ListPhiDetectionJobsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListPhiDetectionJobsXAmzTargetEnum;
}


export class ListPhiDetectionJobsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListPhiDetectionJobsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListPhiDetectionJobsRequest;
}


export class ListPhiDetectionJobsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listPhiDetectionJobsResponse?: shared.ListPhiDetectionJobsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  validationException?: any;
}
