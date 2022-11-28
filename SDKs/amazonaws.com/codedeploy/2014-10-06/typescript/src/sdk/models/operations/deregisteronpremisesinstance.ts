import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DeregisterOnPremisesInstanceXAmzTargetEnum {
    CodeDeploy20141006DeregisterOnPremisesInstance = "CodeDeploy_20141006.DeregisterOnPremisesInstance"
}


export class DeregisterOnPremisesInstanceHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeregisterOnPremisesInstanceXAmzTargetEnum;
}


export class DeregisterOnPremisesInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DeregisterOnPremisesInstanceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DeregisterOnPremisesInstanceInput;
}


export class DeregisterOnPremisesInstanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  instanceNameRequiredException?: any;

  @SpeakeasyMetadata()
  invalidInstanceNameException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
