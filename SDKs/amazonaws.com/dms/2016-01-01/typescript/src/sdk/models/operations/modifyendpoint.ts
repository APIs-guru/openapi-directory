import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ModifyEndpointXAmzTargetEnum {
    AmazonDmSv20160101ModifyEndpoint = "AmazonDMSv20160101.ModifyEndpoint"
}


export class ModifyEndpointHeaders extends SpeakeasyBase {
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
  xAmzTarget: ModifyEndpointXAmzTargetEnum;
}


export class ModifyEndpointRequest extends SpeakeasyBase {
  @Metadata()
  headers: ModifyEndpointHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ModifyEndpointMessage;
}


export class ModifyEndpointResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedFault?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidResourceStateFault?: any;

  @Metadata()
  kmsKeyNotAccessibleFault?: any;

  @Metadata()
  modifyEndpointResponse?: shared.ModifyEndpointResponse;

  @Metadata()
  resourceAlreadyExistsFault?: any;

  @Metadata()
  resourceNotFoundFault?: any;

  @Metadata()
  statusCode: number;
}
