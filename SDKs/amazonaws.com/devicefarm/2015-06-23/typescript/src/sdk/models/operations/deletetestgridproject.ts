import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteTestGridProjectXAmzTargetEnum {
    DeviceFarm20150623DeleteTestGridProject = "DeviceFarm_20150623.DeleteTestGridProject"
}


export class DeleteTestGridProjectHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteTestGridProjectXAmzTargetEnum;
}


export class DeleteTestGridProjectRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteTestGridProjectHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteTestGridProjectRequest;
}


export class DeleteTestGridProjectResponse extends SpeakeasyBase {
  @Metadata()
  argumentException?: any;

  @Metadata()
  cannotDeleteException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteTestGridProjectResult?: Map<string, any>;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;
}
