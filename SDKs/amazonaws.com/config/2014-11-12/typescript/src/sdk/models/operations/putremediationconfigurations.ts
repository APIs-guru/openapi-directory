import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PutRemediationConfigurationsXAmzTargetEnum {
    StarlingDoveServicePutRemediationConfigurations = "StarlingDoveService.PutRemediationConfigurations"
}


export class PutRemediationConfigurationsHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutRemediationConfigurationsXAmzTargetEnum;
}


export class PutRemediationConfigurationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutRemediationConfigurationsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PutRemediationConfigurationsRequest;
}


export class PutRemediationConfigurationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  insufficientPermissionsException?: any;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  putRemediationConfigurationsResponse?: shared.PutRemediationConfigurationsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
