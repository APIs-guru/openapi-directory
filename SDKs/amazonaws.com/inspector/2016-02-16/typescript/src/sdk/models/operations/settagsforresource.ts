import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SetTagsForResourceXAmzTargetEnum {
    InspectorServiceSetTagsForResource = "InspectorService.SetTagsForResource"
}


export class SetTagsForResourceHeaders extends SpeakeasyBase {
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
  xAmzTarget: SetTagsForResourceXAmzTargetEnum;
}


export class SetTagsForResourceRequest extends SpeakeasyBase {
  @Metadata()
  headers: SetTagsForResourceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SetTagsForResourceRequest;
}


export class SetTagsForResourceResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  noSuchEntityException?: any;

  @Metadata()
  serviceTemporarilyUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
