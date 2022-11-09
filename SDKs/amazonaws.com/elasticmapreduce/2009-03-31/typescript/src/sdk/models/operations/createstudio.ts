import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateStudioXAmzTargetEnum {
    ElasticMapReduceCreateStudio = "ElasticMapReduce.CreateStudio"
}


export class CreateStudioHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateStudioXAmzTargetEnum;
}


export class CreateStudioRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateStudioHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateStudioInput;
}


export class CreateStudioResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createStudioOutput?: shared.CreateStudioOutput;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;
}
