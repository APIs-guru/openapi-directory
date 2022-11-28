import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteSecurityConfigurationXAmzTargetEnum {
    ElasticMapReduceDeleteSecurityConfiguration = "ElasticMapReduce.DeleteSecurityConfiguration"
}
export declare class DeleteSecurityConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSecurityConfigurationXAmzTargetEnum;
}
export declare class DeleteSecurityConfigurationRequest extends SpeakeasyBase {
    headers: DeleteSecurityConfigurationHeaders;
    request: shared.DeleteSecurityConfigurationInput;
}
export declare class DeleteSecurityConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    deleteSecurityConfigurationOutput?: Map<string, any>;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
