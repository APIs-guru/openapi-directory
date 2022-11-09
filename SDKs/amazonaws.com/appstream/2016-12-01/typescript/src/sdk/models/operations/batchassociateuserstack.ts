import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BatchAssociateUserStackXAmzTargetEnum {
    PhotonAdminProxyServiceBatchAssociateUserStack = "PhotonAdminProxyService.BatchAssociateUserStack"
}


export class BatchAssociateUserStackHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchAssociateUserStackXAmzTargetEnum;
}


export class BatchAssociateUserStackRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchAssociateUserStackHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchAssociateUserStackRequest;
}


export class BatchAssociateUserStackResponse extends SpeakeasyBase {
  @Metadata()
  batchAssociateUserStackResult?: shared.BatchAssociateUserStackResult;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterCombinationException?: any;

  @Metadata()
  operationNotPermittedException?: any;

  @Metadata()
  statusCode: number;
}
