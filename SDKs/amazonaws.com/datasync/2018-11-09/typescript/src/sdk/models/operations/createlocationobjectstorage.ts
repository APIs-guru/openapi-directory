import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateLocationObjectStorageXAmzTargetEnum {
    FmrsServiceCreateLocationObjectStorage = "FmrsService.CreateLocationObjectStorage"
}


export class CreateLocationObjectStorageHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateLocationObjectStorageXAmzTargetEnum;
}


export class CreateLocationObjectStorageRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateLocationObjectStorageHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateLocationObjectStorageRequest;
}


export class CreateLocationObjectStorageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createLocationObjectStorageResponse?: shared.CreateLocationObjectStorageResponse;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;
}
