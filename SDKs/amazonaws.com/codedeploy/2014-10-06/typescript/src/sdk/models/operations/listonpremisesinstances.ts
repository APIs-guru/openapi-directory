import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListOnPremisesInstancesXAmzTargetEnum {
    CodeDeploy20141006ListOnPremisesInstances = "CodeDeploy_20141006.ListOnPremisesInstances"
}


export class ListOnPremisesInstancesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListOnPremisesInstancesXAmzTargetEnum;
}


export class ListOnPremisesInstancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ListOnPremisesInstancesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListOnPremisesInstancesInput;
}


export class ListOnPremisesInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidNextTokenException?: any;

  @SpeakeasyMetadata()
  invalidRegistrationStatusException?: any;

  @SpeakeasyMetadata()
  invalidTagFilterException?: any;

  @SpeakeasyMetadata()
  listOnPremisesInstancesOutput?: shared.ListOnPremisesInstancesOutput;

  @SpeakeasyMetadata()
  statusCode: number;
}
