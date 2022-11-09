import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListDeploymentInstancesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListDeploymentInstancesXAmzTargetEnum {
    CodeDeploy20141006ListDeploymentInstances = "CodeDeploy_20141006.ListDeploymentInstances"
}


export class ListDeploymentInstancesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListDeploymentInstancesXAmzTargetEnum;
}


export class ListDeploymentInstancesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListDeploymentInstancesQueryParams;

  @Metadata()
  headers: ListDeploymentInstancesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListDeploymentInstancesInput;
}


export class ListDeploymentInstancesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deploymentDoesNotExistException?: any;

  @Metadata()
  deploymentIdRequiredException?: any;

  @Metadata()
  deploymentNotStartedException?: any;

  @Metadata()
  invalidComputePlatformException?: any;

  @Metadata()
  invalidDeploymentIdException?: any;

  @Metadata()
  invalidDeploymentInstanceTypeException?: any;

  @Metadata()
  invalidInstanceStatusException?: any;

  @Metadata()
  invalidInstanceTypeException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  invalidTargetFilterNameException?: any;

  @Metadata()
  listDeploymentInstancesOutput?: shared.ListDeploymentInstancesOutput;

  @Metadata()
  statusCode: number;
}
