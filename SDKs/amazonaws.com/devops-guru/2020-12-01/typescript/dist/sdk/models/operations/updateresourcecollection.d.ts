import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateResourceCollectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateResourceCollectionRequestBodyActionEnum {
    Add = "ADD",
    Remove = "REMOVE"
}
/**
 *  Contains information used to update a collection of AWS resources.
**/
export declare class UpdateResourceCollectionRequestBodyResourceCollection extends SpeakeasyBase {
    cloudFormation?: shared.UpdateCloudFormationCollectionFilter;
}
export declare class UpdateResourceCollectionRequestBody extends SpeakeasyBase {
    action: UpdateResourceCollectionRequestBodyActionEnum;
    resourceCollection: UpdateResourceCollectionRequestBodyResourceCollection;
}
export declare class UpdateResourceCollectionRequest extends SpeakeasyBase {
    headers: UpdateResourceCollectionHeaders;
    request: UpdateResourceCollectionRequestBody;
}
export declare class UpdateResourceCollectionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    statusCode: number;
    throttlingException?: any;
    updateResourceCollectionResponse?: Map<string, any>;
    validationException?: any;
}
