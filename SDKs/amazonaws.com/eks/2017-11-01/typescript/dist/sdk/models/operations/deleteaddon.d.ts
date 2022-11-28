import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAddonPathParams extends SpeakeasyBase {
    addonName: string;
    name: string;
}
export declare class DeleteAddonQueryParams extends SpeakeasyBase {
    preserve?: boolean;
}
export declare class DeleteAddonHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteAddonRequest extends SpeakeasyBase {
    pathParams: DeleteAddonPathParams;
    queryParams: DeleteAddonQueryParams;
    headers: DeleteAddonHeaders;
}
export declare class DeleteAddonResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    deleteAddonResponse?: shared.DeleteAddonResponse;
    invalidParameterException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
