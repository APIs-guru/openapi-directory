import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetOnPremisesInstanceXAmzTargetEnum {
    CodeDeploy20141006GetOnPremisesInstance = "CodeDeploy_20141006.GetOnPremisesInstance"
}


export class GetOnPremisesInstanceHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetOnPremisesInstanceXAmzTargetEnum;
}


export class GetOnPremisesInstanceRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetOnPremisesInstanceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetOnPremisesInstanceInput;
}


export class GetOnPremisesInstanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getOnPremisesInstanceOutput?: shared.GetOnPremisesInstanceOutput;

  @Metadata()
  instanceNameRequiredException?: any;

  @Metadata()
  instanceNotRegisteredException?: any;

  @Metadata()
  invalidInstanceNameException?: any;

  @Metadata()
  statusCode: number;
}
