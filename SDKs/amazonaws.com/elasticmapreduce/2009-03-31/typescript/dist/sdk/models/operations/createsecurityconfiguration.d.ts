import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateSecurityConfigurationXAmzTargetEnum {
    ElasticMapReduceCreateSecurityConfiguration = "ElasticMapReduce.CreateSecurityConfiguration"
}
export declare class CreateSecurityConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateSecurityConfigurationXAmzTargetEnum;
}
export declare class CreateSecurityConfigurationRequest extends SpeakeasyBase {
    headers: CreateSecurityConfigurationHeaders;
    request: shared.CreateSecurityConfigurationInput;
}
export declare class CreateSecurityConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    createSecurityConfigurationOutput?: shared.CreateSecurityConfigurationOutput;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
