import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateTestGridProjectXAmzTargetEnum {
    DeviceFarm20150623CreateTestGridProject = "DeviceFarm_20150623.CreateTestGridProject"
}


export class CreateTestGridProjectHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateTestGridProjectXAmzTargetEnum;
}


export class CreateTestGridProjectRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateTestGridProjectHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateTestGridProjectRequest;
}


export class CreateTestGridProjectResponse extends SpeakeasyBase {
  @Metadata()
  argumentException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createTestGridProjectResult?: shared.CreateTestGridProjectResult;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  statusCode: number;
}
