import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SetVisibleToAllUsersXAmzTargetEnum {
    ElasticMapReduceSetVisibleToAllUsers = "ElasticMapReduce.SetVisibleToAllUsers"
}
export declare class SetVisibleToAllUsersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetVisibleToAllUsersXAmzTargetEnum;
}
export declare class SetVisibleToAllUsersRequest extends SpeakeasyBase {
    headers: SetVisibleToAllUsersHeaders;
    request: shared.SetVisibleToAllUsersInput;
}
export declare class SetVisibleToAllUsersResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    statusCode: number;
}
