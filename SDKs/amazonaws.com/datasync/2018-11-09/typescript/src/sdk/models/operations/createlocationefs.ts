import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateLocationEfsXAmzTargetEnum {
    FmrsServiceCreateLocationEfs = "FmrsService.CreateLocationEfs"
}


export class CreateLocationEfsHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateLocationEfsXAmzTargetEnum;
}


export class CreateLocationEfsRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateLocationEfsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateLocationEfsRequest;
}


export class CreateLocationEfsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createLocationEfsResponse?: shared.CreateLocationEfsResponse;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;
}
