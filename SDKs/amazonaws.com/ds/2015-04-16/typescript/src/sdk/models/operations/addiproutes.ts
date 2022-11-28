import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AddIpRoutesXAmzTargetEnum {
    DirectoryService20150416AddIpRoutes = "DirectoryService_20150416.AddIpRoutes"
}


export class AddIpRoutesHeaders extends SpeakeasyBase {
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
  xAmzTarget: AddIpRoutesXAmzTargetEnum;
}


export class AddIpRoutesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AddIpRoutesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AddIpRoutesRequest;
}


export class AddIpRoutesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addIpRoutesResult?: Map<string, any>;

  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  directoryUnavailableException?: any;

  @SpeakeasyMetadata()
  entityAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  entityDoesNotExistException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  ipRouteLimitExceededException?: any;

  @SpeakeasyMetadata()
  serviceException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
