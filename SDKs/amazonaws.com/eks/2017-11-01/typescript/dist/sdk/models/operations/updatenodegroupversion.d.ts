import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateNodegroupVersionPathParams extends SpeakeasyBase {
    name: string;
    nodegroupName: string;
}
export declare class UpdateNodegroupVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * <p>An object representing a node group launch template specification. The launch template cannot include <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html"> <code>SubnetId</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html"> <code>IamInstanceProfile</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html"> <code>RequestSpotInstances</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html"> <code>HibernationOptions</code> </a>, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html"> <code>TerminateInstances</code> </a>, or the node group deployment or update will fail. For more information about launch templates, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html"> <code>CreateLaunchTemplate</code> </a> in the Amazon EC2 API Reference. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the Amazon EKS User Guide.</p> <p>Specify either <code>name</code> or <code>id</code>, but not both.</p>
**/
export declare class UpdateNodegroupVersionRequestBodyLaunchTemplate extends SpeakeasyBase {
    id?: string;
    name?: string;
    version?: string;
}
export declare class UpdateNodegroupVersionRequestBody extends SpeakeasyBase {
    clientRequestToken?: string;
    force?: boolean;
    launchTemplate?: UpdateNodegroupVersionRequestBodyLaunchTemplate;
    releaseVersion?: string;
    version?: string;
}
export declare class UpdateNodegroupVersionRequest extends SpeakeasyBase {
    pathParams: UpdateNodegroupVersionPathParams;
    headers: UpdateNodegroupVersionHeaders;
    request: UpdateNodegroupVersionRequestBody;
}
export declare class UpdateNodegroupVersionResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    invalidParameterException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    serverException?: any;
    statusCode: number;
    updateNodegroupVersionResponse?: shared.UpdateNodegroupVersionResponse;
}
