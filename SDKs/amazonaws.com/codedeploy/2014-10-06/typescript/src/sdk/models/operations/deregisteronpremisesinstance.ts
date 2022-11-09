import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeregisterOnPremisesInstanceXAmzTargetEnum {
    CodeDeploy20141006DeregisterOnPremisesInstance = "CodeDeploy_20141006.DeregisterOnPremisesInstance"
}


export class DeregisterOnPremisesInstanceHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeregisterOnPremisesInstanceXAmzTargetEnum;
}


export class DeregisterOnPremisesInstanceRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeregisterOnPremisesInstanceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeregisterOnPremisesInstanceInput;
}


export class DeregisterOnPremisesInstanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  instanceNameRequiredException?: any;

  @Metadata()
  invalidInstanceNameException?: any;

  @Metadata()
  statusCode: number;
}
