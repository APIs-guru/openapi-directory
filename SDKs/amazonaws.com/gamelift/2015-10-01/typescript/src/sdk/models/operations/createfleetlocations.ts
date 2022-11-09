import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateFleetLocationsXAmzTargetEnum {
    GameLiftCreateFleetLocations = "GameLift.CreateFleetLocations"
}


export class CreateFleetLocationsHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateFleetLocationsXAmzTargetEnum;
}


export class CreateFleetLocationsRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateFleetLocationsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateFleetLocationsInput;
}


export class CreateFleetLocationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createFleetLocationsOutput?: shared.CreateFleetLocationsOutput;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidFleetStatusException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedException?: any;
}
