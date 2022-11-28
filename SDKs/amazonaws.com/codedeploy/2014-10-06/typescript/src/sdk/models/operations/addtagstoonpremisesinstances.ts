import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AddTagsToOnPremisesInstancesXAmzTargetEnum {
    CodeDeploy20141006AddTagsToOnPremisesInstances = "CodeDeploy_20141006.AddTagsToOnPremisesInstances"
}


export class AddTagsToOnPremisesInstancesHeaders extends SpeakeasyBase {
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
  xAmzTarget: AddTagsToOnPremisesInstancesXAmzTargetEnum;
}


export class AddTagsToOnPremisesInstancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AddTagsToOnPremisesInstancesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AddTagsToOnPremisesInstancesInput;
}


export class AddTagsToOnPremisesInstancesResponse extends SpeakeasyBase {
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
