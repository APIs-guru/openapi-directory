import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteResourcesByExternalIdXAmzTargetEnum {
    CodeDeploy20141006DeleteResourcesByExternalId = "CodeDeploy_20141006.DeleteResourcesByExternalId"
}


export class DeleteResourcesByExternalIdHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteResourcesByExternalIdXAmzTargetEnum;
}


export class DeleteResourcesByExternalIdRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteResourcesByExternalIdHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteResourcesByExternalIdInput;
}


export class DeleteResourcesByExternalIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteResourcesByExternalIdOutput?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
