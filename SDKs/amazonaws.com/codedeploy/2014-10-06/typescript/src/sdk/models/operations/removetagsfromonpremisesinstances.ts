import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum RemoveTagsFromOnPremisesInstancesXAmzTargetEnum {
    CodeDeploy20141006RemoveTagsFromOnPremisesInstances = "CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances"
}


export class RemoveTagsFromOnPremisesInstancesHeaders extends SpeakeasyBase {
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
  xAmzTarget: RemoveTagsFromOnPremisesInstancesXAmzTargetEnum;
}


export class RemoveTagsFromOnPremisesInstancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RemoveTagsFromOnPremisesInstancesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RemoveTagsFromOnPremisesInstancesInput;
}


export class RemoveTagsFromOnPremisesInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  instanceLimitExceededException?: any;

  @SpeakeasyMetadata()
  instanceNameRequiredException?: any;

  @SpeakeasyMetadata()
  instanceNotRegisteredException?: any;

  @SpeakeasyMetadata()
  invalidInstanceNameException?: any;

  @SpeakeasyMetadata()
  invalidTagException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tagLimitExceededException?: any;

  @SpeakeasyMetadata()
  tagRequiredException?: any;
}
