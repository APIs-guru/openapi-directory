import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListDeploymentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListDeploymentsXAmzTargetEnum {
    CodeDeploy20141006ListDeployments = "CodeDeploy_20141006.ListDeployments"
}


export class ListDeploymentsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListDeploymentsXAmzTargetEnum;
}


export class ListDeploymentsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListDeploymentsQueryParams;

  @Metadata()
  headers: ListDeploymentsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListDeploymentsInput;
}


export class ListDeploymentsResponse extends SpeakeasyBase {
  @Metadata()
  applicationDoesNotExistException?: any;

  @Metadata()
  applicationNameRequiredException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deploymentGroupDoesNotExistException?: any;

  @Metadata()
  deploymentGroupNameRequiredException?: any;

  @Metadata()
  invalidApplicationNameException?: any;

  @Metadata()
  invalidDeploymentGroupNameException?: any;

  @Metadata()
  invalidDeploymentStatusException?: any;

  @Metadata()
  invalidExternalIdException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  invalidTimeRangeException?: any;

  @Metadata()
  listDeploymentsOutput?: shared.ListDeploymentsOutput;

  @Metadata()
  statusCode: number;
}
