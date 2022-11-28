import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateClusterConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class UpdateClusterConfigHeaders extends SpeakeasyBase {
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
}


// UpdateClusterConfigRequestBodyLogging
/** 
 * An object representing the logging configuration for resources in your cluster.
**/
export class UpdateClusterConfigRequestBodyLogging extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterLogging", elemType: shared.LogSetup })
  clusterLogging?: shared.LogSetup[];
}


// UpdateClusterConfigRequestBodyResourcesVpcConfig
/** 
 * An object representing the VPC configuration to use for an Amazon EKS cluster.
**/
export class UpdateClusterConfigRequestBodyResourcesVpcConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endpointPrivateAccess" })
  endpointPrivateAccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=endpointPublicAccess" })
  endpointPublicAccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=publicAccessCidrs" })
  publicAccessCidrs?: string[];

  @SpeakeasyMetadata({ data: "json, name=securityGroupIds" })
  securityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=subnetIds" })
  subnetIds?: string[];
}


export class UpdateClusterConfigRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=logging" })
  logging?: UpdateClusterConfigRequestBodyLogging;

  @SpeakeasyMetadata({ data: "json, name=resourcesVpcConfig" })
  resourcesVpcConfig?: UpdateClusterConfigRequestBodyResourcesVpcConfig;
}


export class UpdateClusterConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateClusterConfigPathParams;

  @SpeakeasyMetadata()
  headers: UpdateClusterConfigHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateClusterConfigRequestBody;
}


export class UpdateClusterConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceInUseException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serverException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateClusterConfigResponse?: shared.UpdateClusterConfigResponse;
}
