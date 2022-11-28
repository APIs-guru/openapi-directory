import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateNodegroupConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodegroupName" })
  nodegroupName: string;
}


export class UpdateNodegroupConfigHeaders extends SpeakeasyBase {
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


// UpdateNodegroupConfigRequestBodyLabels
/** 
 * An object representing a Kubernetes label change for a managed node group.
**/
export class UpdateNodegroupConfigRequestBodyLabels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addOrUpdateLabels" })
  addOrUpdateLabels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=removeLabels" })
  removeLabels?: string[];
}


// UpdateNodegroupConfigRequestBodyScalingConfig
/** 
 * An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties.
**/
export class UpdateNodegroupConfigRequestBodyScalingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desiredSize" })
  desiredSize?: number;

  @SpeakeasyMetadata({ data: "json, name=maxSize" })
  maxSize?: number;

  @SpeakeasyMetadata({ data: "json, name=minSize" })
  minSize?: number;
}


// UpdateNodegroupConfigRequestBodyTaints
/** 
 * An object representing the details of an update to a taints payload.
**/
export class UpdateNodegroupConfigRequestBodyTaints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addOrUpdateTaints", elemType: shared.Taint })
  addOrUpdateTaints?: shared.Taint[];

  @SpeakeasyMetadata({ data: "json, name=removeTaints", elemType: shared.Taint })
  removeTaints?: shared.Taint[];
}


// UpdateNodegroupConfigRequestBodyUpdateConfig
/** 
 * The node group update configuration.
**/
export class UpdateNodegroupConfigRequestBodyUpdateConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxUnavailable" })
  maxUnavailable?: number;

  @SpeakeasyMetadata({ data: "json, name=maxUnavailablePercentage" })
  maxUnavailablePercentage?: number;
}


export class UpdateNodegroupConfigRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: UpdateNodegroupConfigRequestBodyLabels;

  @SpeakeasyMetadata({ data: "json, name=scalingConfig" })
  scalingConfig?: UpdateNodegroupConfigRequestBodyScalingConfig;

  @SpeakeasyMetadata({ data: "json, name=taints" })
  taints?: UpdateNodegroupConfigRequestBodyTaints;

  @SpeakeasyMetadata({ data: "json, name=updateConfig" })
  updateConfig?: UpdateNodegroupConfigRequestBodyUpdateConfig;
}


export class UpdateNodegroupConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNodegroupConfigPathParams;

  @SpeakeasyMetadata()
  headers: UpdateNodegroupConfigHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateNodegroupConfigRequestBody;
}


export class UpdateNodegroupConfigResponse extends SpeakeasyBase {
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
  updateNodegroupConfigResponse?: shared.UpdateNodegroupConfigResponse;
}
