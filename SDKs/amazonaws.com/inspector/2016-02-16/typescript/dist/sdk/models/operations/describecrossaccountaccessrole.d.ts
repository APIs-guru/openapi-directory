import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeCrossAccountAccessRoleXAmzTargetEnum {
    InspectorServiceDescribeCrossAccountAccessRole = "InspectorService.DescribeCrossAccountAccessRole"
}
export declare class DescribeCrossAccountAccessRoleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCrossAccountAccessRoleXAmzTargetEnum;
}
export declare class DescribeCrossAccountAccessRoleRequest extends SpeakeasyBase {
    headers: DescribeCrossAccountAccessRoleHeaders;
}
export declare class DescribeCrossAccountAccessRoleResponse extends SpeakeasyBase {
    contentType: string;
    describeCrossAccountAccessRoleResponse?: shared.DescribeCrossAccountAccessRoleResponse;
    internalException?: any;
    statusCode: number;
}
