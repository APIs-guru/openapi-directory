import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListEntitiesDetectionV2JobsXAmzTargetEnum {
    ComprehendMedical20181030ListEntitiesDetectionV2Jobs = "ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs"
}


export class ListEntitiesDetectionV2JobsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListEntitiesDetectionV2JobsXAmzTargetEnum;
}


export class ListEntitiesDetectionV2JobsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListEntitiesDetectionV2JobsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListEntitiesDetectionV2JobsRequest;
}


export class ListEntitiesDetectionV2JobsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listEntitiesDetectionV2JobsResponse?: shared.ListEntitiesDetectionV2JobsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  validationException?: any;
}
