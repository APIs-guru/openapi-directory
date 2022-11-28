import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListDeploymentInstancesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListDeploymentInstancesXAmzTargetEnum {
    CodeDeploy20141006ListDeploymentInstances = "CodeDeploy_20141006.ListDeploymentInstances"
}


export class ListDeploymentInstancesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListDeploymentInstancesXAmzTargetEnum;
}


export class ListDeploymentInstancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListDeploymentInstancesQueryParams;

  @SpeakeasyMetadata()
  headers: ListDeploymentInstancesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListDeploymentInstancesInput;
}


export class ListDeploymentInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deploymentDoesNotExistException?: any;

  @SpeakeasyMetadata()
  deploymentIdRequiredException?: any;

  @SpeakeasyMetadata()
  deploymentNotStartedException?: any;

  @SpeakeasyMetadata()
  invalidComputePlatformException?: any;

  @SpeakeasyMetadata()
  invalidDeploymentIdException?: any;

  @SpeakeasyMetadata()
  invalidDeploymentInstanceTypeException?: any;

  @SpeakeasyMetadata()
  invalidInstanceStatusException?: any;

  @SpeakeasyMetadata()
  invalidInstanceTypeException?: any;

  @SpeakeasyMetadata()
  invalidNextTokenException?: any;

  @SpeakeasyMetadata()
  invalidTargetFilterNameException?: any;

  @SpeakeasyMetadata()
  listDeploymentInstancesOutput?: shared.ListDeploymentInstancesOutput;

  @SpeakeasyMetadata()
  statusCode: number;
}
