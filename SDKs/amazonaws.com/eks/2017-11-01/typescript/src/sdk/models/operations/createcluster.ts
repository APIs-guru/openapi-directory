import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateClusterHeaders extends SpeakeasyBase {
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


// CreateClusterRequestBodyKubernetesNetworkConfig
/** 
 * The Kubernetes network configuration for the cluster.
**/
export class CreateClusterRequestBodyKubernetesNetworkConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceIpv4Cidr" })
  serviceIpv4Cidr?: string;
}


// CreateClusterRequestBodyLogging
/** 
 * An object representing the logging configuration for resources in your cluster.
**/
export class CreateClusterRequestBodyLogging extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterLogging", elemType: shared.LogSetup })
  clusterLogging?: shared.LogSetup[];
}


// CreateClusterRequestBodyResourcesVpcConfig
/** 
 * An object representing the VPC configuration to use for an Amazon EKS cluster.
**/
export class CreateClusterRequestBodyResourcesVpcConfig extends SpeakeasyBase {
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


export class CreateClusterRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=encryptionConfig", elemType: shared.EncryptionConfig })
  encryptionConfig?: shared.EncryptionConfig[];

  @SpeakeasyMetadata({ data: "json, name=kubernetesNetworkConfig" })
  kubernetesNetworkConfig?: CreateClusterRequestBodyKubernetesNetworkConfig;

  @SpeakeasyMetadata({ data: "json, name=logging" })
  logging?: CreateClusterRequestBodyLogging;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=resourcesVpcConfig" })
  resourcesVpcConfig: CreateClusterRequestBodyResourcesVpcConfig;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


export class CreateClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateClusterHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateClusterRequestBody;
}


export class CreateClusterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createClusterResponse?: shared.CreateClusterResponse;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  resourceInUseException?: any;

  @SpeakeasyMetadata()
  resourceLimitExceededException?: any;

  @SpeakeasyMetadata()
  serverException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unsupportedAvailabilityZoneException?: any;
}
