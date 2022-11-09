import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteNodegroupPathParams extends SpeakeasyBase {
    name: string;
    nodegroupName: string;
}
export declare class DeleteNodegroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteNodegroupRequest extends SpeakeasyBase {
    pathParams: DeleteNodegroupPathParams;
    headers: DeleteNodegroupHeaders;
}
export declare class DeleteNodegroupResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    deleteNodegroupResponse?: shared.DeleteNodegroupResponse;
    invalidParameterException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    serverException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
