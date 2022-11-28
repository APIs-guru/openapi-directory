import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdateNumberOfDomainControllersXAmzTargetEnum {
    DirectoryService20150416UpdateNumberOfDomainControllers = "DirectoryService_20150416.UpdateNumberOfDomainControllers"
}


export class UpdateNumberOfDomainControllersHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateNumberOfDomainControllersXAmzTargetEnum;
}


export class UpdateNumberOfDomainControllersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateNumberOfDomainControllersHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateNumberOfDomainControllersRequest;
}


export class UpdateNumberOfDomainControllersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  directoryUnavailableException?: any;

  @SpeakeasyMetadata()
  domainControllerLimitExceededException?: any;

  @SpeakeasyMetadata()
  entityDoesNotExistException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  serviceException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unsupportedOperationException?: any;

  @SpeakeasyMetadata()
  updateNumberOfDomainControllersResult?: Map<string, any>;
}
