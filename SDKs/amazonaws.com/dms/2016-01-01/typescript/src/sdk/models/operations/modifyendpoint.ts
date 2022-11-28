import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ModifyEndpointXAmzTargetEnum {
    AmazonDmSv20160101ModifyEndpoint = "AmazonDMSv20160101.ModifyEndpoint"
}


export class ModifyEndpointHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ModifyEndpointXAmzTargetEnum;
}


export class ModifyEndpointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ModifyEndpointHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ModifyEndpointMessage;
}


export class ModifyEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedFault?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidResourceStateFault?: any;

  @SpeakeasyMetadata()
  kmsKeyNotAccessibleFault?: any;

  @SpeakeasyMetadata()
  modifyEndpointResponse?: shared.ModifyEndpointResponse;

  @SpeakeasyMetadata()
  resourceAlreadyExistsFault?: any;

  @SpeakeasyMetadata()
  resourceNotFoundFault?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
