import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetWorkGroupXAmzTargetEnum {
    AmazonAthenaGetWorkGroup = "AmazonAthena.GetWorkGroup"
}


export class GetWorkGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetWorkGroupXAmzTargetEnum;
}


export class GetWorkGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetWorkGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetWorkGroupInput;
}


export class GetWorkGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getWorkGroupOutput?: shared.GetWorkGroupOutput;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;
}
