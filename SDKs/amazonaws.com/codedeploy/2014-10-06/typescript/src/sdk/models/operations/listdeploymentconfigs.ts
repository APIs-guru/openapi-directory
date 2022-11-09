import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListDeploymentConfigsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListDeploymentConfigsXAmzTargetEnum {
    CodeDeploy20141006ListDeploymentConfigs = "CodeDeploy_20141006.ListDeploymentConfigs"
}


export class ListDeploymentConfigsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListDeploymentConfigsXAmzTargetEnum;
}


export class ListDeploymentConfigsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListDeploymentConfigsQueryParams;

  @Metadata()
  headers: ListDeploymentConfigsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListDeploymentConfigsInput;
}


export class ListDeploymentConfigsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  listDeploymentConfigsOutput?: shared.ListDeploymentConfigsOutput;

  @Metadata()
  statusCode: number;
}
