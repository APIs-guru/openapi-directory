import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartRemediationExecutionXAmzTargetEnum {
    StarlingDoveServiceStartRemediationExecution = "StarlingDoveService.StartRemediationExecution"
}


export class StartRemediationExecutionHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartRemediationExecutionXAmzTargetEnum;
}


export class StartRemediationExecutionRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartRemediationExecutionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartRemediationExecutionRequest;
}


export class StartRemediationExecutionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  insufficientPermissionsException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  noSuchRemediationConfigurationException?: any;

  @Metadata()
  startRemediationExecutionResponse?: shared.StartRemediationExecutionResponse;

  @Metadata()
  statusCode: number;
}
