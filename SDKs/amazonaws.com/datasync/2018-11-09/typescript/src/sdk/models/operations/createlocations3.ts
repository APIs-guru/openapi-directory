import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateLocationS3XAmzTargetEnum {
    FmrsServiceCreateLocationS3 = "FmrsService.CreateLocationS3"
}


export class CreateLocationS3Headers extends SpeakeasyBase {
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
  xAmzTarget: CreateLocationS3XAmzTargetEnum;
}


export class CreateLocationS3Request extends SpeakeasyBase {
  @Metadata()
  headers: CreateLocationS3Headers;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateLocationS3Request;
}


export class CreateLocationS3Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createLocationS3Response?: shared.CreateLocationS3Response;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;
}
