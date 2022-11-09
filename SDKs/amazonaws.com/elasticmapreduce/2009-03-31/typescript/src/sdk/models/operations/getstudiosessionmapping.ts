import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetStudioSessionMappingXAmzTargetEnum {
    ElasticMapReduceGetStudioSessionMapping = "ElasticMapReduce.GetStudioSessionMapping"
}


export class GetStudioSessionMappingHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetStudioSessionMappingXAmzTargetEnum;
}


export class GetStudioSessionMappingRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetStudioSessionMappingHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetStudioSessionMappingInput;
}


export class GetStudioSessionMappingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getStudioSessionMappingOutput?: shared.GetStudioSessionMappingOutput;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;
}
