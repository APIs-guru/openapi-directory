import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateNodegroupVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodegroupName" })
  nodegroupName: string;
}


export class UpdateNodegroupVersionHeaders extends SpeakeasyBase {
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


// UpdateNodegroupVersionRequestBodyLaunchTemplate
/** 
 * <p>An object representing a node group launch template specification. The launch template cannot include <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html"> <code>SubnetId</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html"> <code>IamInstanceProfile</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html"> <code>RequestSpotInstances</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html"> <code>HibernationOptions</code> </a>, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html"> <code>TerminateInstances</code> </a>, or the node group deployment or update will fail. For more information about launch templates, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html"> <code>CreateLaunchTemplate</code> </a> in the Amazon EC2 API Reference. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the Amazon EKS User Guide.</p> <p>Specify either <code>name</code> or <code>id</code>, but not both.</p>
**/
export class UpdateNodegroupVersionRequestBodyLaunchTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}


export class UpdateNodegroupVersionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=force" })
  force?: boolean;

  @Metadata({ data: "json, name=launchTemplate" })
  launchTemplate?: UpdateNodegroupVersionRequestBodyLaunchTemplate;

  @Metadata({ data: "json, name=releaseVersion" })
  releaseVersion?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}


export class UpdateNodegroupVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNodegroupVersionPathParams;

  @Metadata()
  headers: UpdateNodegroupVersionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateNodegroupVersionRequestBody;
}


export class UpdateNodegroupVersionResponse extends SpeakeasyBase {
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
  updateNodegroupVersionResponse?: shared.UpdateNodegroupVersionResponse;
}
