import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateClusterHeaders extends SpeakeasyBase {
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


// CreateClusterRequestBodyKubernetesNetworkConfig
/** 
 * The Kubernetes network configuration for the cluster.
**/
export class CreateClusterRequestBodyKubernetesNetworkConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=serviceIpv4Cidr" })
  serviceIpv4Cidr?: string;
}


// CreateClusterRequestBodyLogging
/** 
 * An object representing the logging configuration for resources in your cluster.
**/
export class CreateClusterRequestBodyLogging extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterLogging", elemType: shared.LogSetup })
  clusterLogging?: shared.LogSetup[];
}


// CreateClusterRequestBodyResourcesVpcConfig
/** 
 * An object representing the VPC configuration to use for an Amazon EKS cluster.
**/
export class CreateClusterRequestBodyResourcesVpcConfig extends SpeakeasyBase {
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


export class CreateClusterRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=encryptionConfig", elemType: shared.EncryptionConfig })
  encryptionConfig?: shared.EncryptionConfig[];

  @Metadata({ data: "json, name=kubernetesNetworkConfig" })
  kubernetesNetworkConfig?: CreateClusterRequestBodyKubernetesNetworkConfig;

  @Metadata({ data: "json, name=logging" })
  logging?: CreateClusterRequestBodyLogging;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=resourcesVpcConfig" })
  resourcesVpcConfig: CreateClusterRequestBodyResourcesVpcConfig;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=version" })
  version?: string;
}


export class CreateClusterRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateClusterHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateClusterRequestBody;
}


export class CreateClusterResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createClusterResponse?: shared.CreateClusterResponse;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceLimitExceededException?: any;

  @Metadata()
  serverException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedAvailabilityZoneException?: any;
}
