import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListOnPremisesInstancesXAmzTargetEnum {
    CodeDeploy20141006ListOnPremisesInstances = "CodeDeploy_20141006.ListOnPremisesInstances"
}


export class ListOnPremisesInstancesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListOnPremisesInstancesXAmzTargetEnum;
}


export class ListOnPremisesInstancesRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListOnPremisesInstancesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListOnPremisesInstancesInput;
}


export class ListOnPremisesInstancesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  invalidRegistrationStatusException?: any;

  @Metadata()
  invalidTagFilterException?: any;

  @Metadata()
  listOnPremisesInstancesOutput?: shared.ListOnPremisesInstancesOutput;

  @Metadata()
  statusCode: number;
}
