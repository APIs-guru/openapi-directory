import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateClusterXAmzTargetEnum {
    BaldrApiServiceCreateCluster = "BaldrApiService.CreateCluster"
}


export class CreateClusterHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateClusterXAmzTargetEnum;
}


export class CreateClusterRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateClusterHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateClusterRequest;
}


export class CreateClusterResponse extends SpeakeasyBase {
  @Metadata()
  cloudHsmAccessDeniedException?: any;

  @Metadata()
  cloudHsmInternalFailureException?: any;

  @Metadata()
  cloudHsmInvalidRequestException?: any;

  @Metadata()
  cloudHsmResourceNotFoundException?: any;

  @Metadata()
  cloudHsmServiceException?: any;

  @Metadata()
  cloudHsmTagException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createClusterResponse?: shared.CreateClusterResponse;

  @Metadata()
  statusCode: number;
}
