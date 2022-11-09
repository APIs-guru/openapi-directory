import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum RebootNodeXAmzTargetEnum {
    AmazonDaxv3RebootNode = "AmazonDAXV3.RebootNode"
}
export declare class RebootNodeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RebootNodeXAmzTargetEnum;
}
export declare class RebootNodeRequest extends SpeakeasyBase {
    headers: RebootNodeHeaders;
    request: shared.RebootNodeRequest;
}
export declare class RebootNodeResponse extends SpeakeasyBase {
    clusterNotFoundFault?: any;
    contentType: string;
    invalidClusterStateFault?: any;
    invalidParameterCombinationException?: any;
    invalidParameterValueException?: any;
    nodeNotFoundFault?: any;
    rebootNodeResponse?: shared.RebootNodeResponse;
    serviceLinkedRoleNotFoundFault?: any;
    statusCode: number;
}
