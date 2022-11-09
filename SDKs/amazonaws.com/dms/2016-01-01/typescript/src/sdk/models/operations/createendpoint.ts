import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateEndpointXAmzTargetEnum {
    AmazonDmSv20160101CreateEndpoint = "AmazonDMSv20160101.CreateEndpoint"
}


export class CreateEndpointHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateEndpointXAmzTargetEnum;
}


export class CreateEndpointRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateEndpointHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateEndpointMessage;
}


export class CreateEndpointResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedFault?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createEndpointResponse?: shared.CreateEndpointResponse;

  @Metadata()
  invalidResourceStateFault?: any;

  @Metadata()
  kmsKeyNotAccessibleFault?: any;

  @Metadata()
  resourceAlreadyExistsFault?: any;

  @Metadata()
  resourceNotFoundFault?: any;

  @Metadata()
  resourceQuotaExceededFault?: any;

  @Metadata()
  s3AccessDeniedFault?: any;

  @Metadata()
  statusCode: number;
}
