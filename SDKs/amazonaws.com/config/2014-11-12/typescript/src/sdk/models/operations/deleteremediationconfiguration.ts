import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteRemediationConfigurationXAmzTargetEnum {
    StarlingDoveServiceDeleteRemediationConfiguration = "StarlingDoveService.DeleteRemediationConfiguration"
}


export class DeleteRemediationConfigurationHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteRemediationConfigurationXAmzTargetEnum;
}


export class DeleteRemediationConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteRemediationConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteRemediationConfigurationRequest;
}


export class DeleteRemediationConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteRemediationConfigurationResponse?: Map<string, any>;

  @Metadata()
  insufficientPermissionsException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  noSuchRemediationConfigurationException?: any;

  @Metadata()
  remediationInProgressException?: any;

  @Metadata()
  statusCode: number;
}
