import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateClusterConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class UpdateClusterConfigHeaders extends SpeakeasyBase {
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
}


// UpdateClusterConfigRequestBodyLogging
/** 
 * An object representing the logging configuration for resources in your cluster.
**/
export class UpdateClusterConfigRequestBodyLogging extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterLogging", elemType: shared.LogSetup })
  clusterLogging?: shared.LogSetup[];
}


// UpdateClusterConfigRequestBodyResourcesVpcConfig
/** 
 * An object representing the VPC configuration to use for an Amazon EKS cluster.
**/
export class UpdateClusterConfigRequestBodyResourcesVpcConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=endpointPrivateAccess" })
  endpointPrivateAccess?: boolean;

  @Metadata({ data: "json, name=endpointPublicAccess" })
  endpointPublicAccess?: boolean;

  @Metadata({ data: "json, name=publicAccessCidrs" })
  publicAccessCidrs?: string[];

  @Metadata({ data: "json, name=securityGroupIds" })
  securityGroupIds?: string[];

  @Metadata({ data: "json, name=subnetIds" })
  subnetIds?: string[];
}


export class UpdateClusterConfigRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=logging" })
  logging?: UpdateClusterConfigRequestBodyLogging;

  @Metadata({ data: "json, name=resourcesVpcConfig" })
  resourcesVpcConfig?: UpdateClusterConfigRequestBodyResourcesVpcConfig;
}


export class UpdateClusterConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateClusterConfigPathParams;

  @Metadata()
  headers: UpdateClusterConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateClusterConfigRequestBody;
}


export class UpdateClusterConfigResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateClusterConfigResponse?: shared.UpdateClusterConfigResponse;
}
