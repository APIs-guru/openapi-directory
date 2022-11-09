import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateNodegroupConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodegroupName" })
  nodegroupName: string;
}


export class UpdateNodegroupConfigHeaders extends SpeakeasyBase {
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


// UpdateNodegroupConfigRequestBodyLabels
/** 
 * An object representing a Kubernetes label change for a managed node group.
**/
export class UpdateNodegroupConfigRequestBodyLabels extends SpeakeasyBase {
  @Metadata({ data: "json, name=addOrUpdateLabels" })
  addOrUpdateLabels?: Map<string, string>;

  @Metadata({ data: "json, name=removeLabels" })
  removeLabels?: string[];
}


// UpdateNodegroupConfigRequestBodyScalingConfig
/** 
 * An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties.
**/
export class UpdateNodegroupConfigRequestBodyScalingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=desiredSize" })
  desiredSize?: number;

  @Metadata({ data: "json, name=maxSize" })
  maxSize?: number;

  @Metadata({ data: "json, name=minSize" })
  minSize?: number;
}


// UpdateNodegroupConfigRequestBodyTaints
/** 
 * An object representing the details of an update to a taints payload.
**/
export class UpdateNodegroupConfigRequestBodyTaints extends SpeakeasyBase {
  @Metadata({ data: "json, name=addOrUpdateTaints", elemType: shared.Taint })
  addOrUpdateTaints?: shared.Taint[];

  @Metadata({ data: "json, name=removeTaints", elemType: shared.Taint })
  removeTaints?: shared.Taint[];
}


// UpdateNodegroupConfigRequestBodyUpdateConfig
/** 
 * The node group update configuration.
**/
export class UpdateNodegroupConfigRequestBodyUpdateConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxUnavailable" })
  maxUnavailable?: number;

  @Metadata({ data: "json, name=maxUnavailablePercentage" })
  maxUnavailablePercentage?: number;
}


export class UpdateNodegroupConfigRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: UpdateNodegroupConfigRequestBodyLabels;

  @Metadata({ data: "json, name=scalingConfig" })
  scalingConfig?: UpdateNodegroupConfigRequestBodyScalingConfig;

  @Metadata({ data: "json, name=taints" })
  taints?: UpdateNodegroupConfigRequestBodyTaints;

  @Metadata({ data: "json, name=updateConfig" })
  updateConfig?: UpdateNodegroupConfigRequestBodyUpdateConfig;
}


export class UpdateNodegroupConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNodegroupConfigPathParams;

  @Metadata()
  headers: UpdateNodegroupConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateNodegroupConfigRequestBody;
}


export class UpdateNodegroupConfigResponse extends SpeakeasyBase {
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
  updateNodegroupConfigResponse?: shared.UpdateNodegroupConfigResponse;
}
