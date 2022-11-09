import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutRemediationConfigurationsXAmzTargetEnum {
    StarlingDoveServicePutRemediationConfigurations = "StarlingDoveService.PutRemediationConfigurations"
}


export class PutRemediationConfigurationsHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutRemediationConfigurationsXAmzTargetEnum;
}


export class PutRemediationConfigurationsRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutRemediationConfigurationsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutRemediationConfigurationsRequest;
}


export class PutRemediationConfigurationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  insufficientPermissionsException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  putRemediationConfigurationsResponse?: shared.PutRemediationConfigurationsResponse;

  @Metadata()
  statusCode: number;
}
