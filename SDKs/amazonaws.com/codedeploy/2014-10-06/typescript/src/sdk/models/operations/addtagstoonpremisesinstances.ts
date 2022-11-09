import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AddTagsToOnPremisesInstancesXAmzTargetEnum {
    CodeDeploy20141006AddTagsToOnPremisesInstances = "CodeDeploy_20141006.AddTagsToOnPremisesInstances"
}


export class AddTagsToOnPremisesInstancesHeaders extends SpeakeasyBase {
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
  xAmzTarget: AddTagsToOnPremisesInstancesXAmzTargetEnum;
}


export class AddTagsToOnPremisesInstancesRequest extends SpeakeasyBase {
  @Metadata()
  headers: AddTagsToOnPremisesInstancesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AddTagsToOnPremisesInstancesInput;
}


export class AddTagsToOnPremisesInstancesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  instanceLimitExceededException?: any;

  @Metadata()
  instanceNameRequiredException?: any;

  @Metadata()
  instanceNotRegisteredException?: any;

  @Metadata()
  invalidInstanceNameException?: any;

  @Metadata()
  invalidTagException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagLimitExceededException?: any;

  @Metadata()
  tagRequiredException?: any;
}
