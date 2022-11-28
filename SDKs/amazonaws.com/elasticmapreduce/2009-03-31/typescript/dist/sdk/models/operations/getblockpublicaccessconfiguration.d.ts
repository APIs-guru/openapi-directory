import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetBlockPublicAccessConfigurationXAmzTargetEnum {
    ElasticMapReduceGetBlockPublicAccessConfiguration = "ElasticMapReduce.GetBlockPublicAccessConfiguration"
}
export declare class GetBlockPublicAccessConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetBlockPublicAccessConfigurationXAmzTargetEnum;
}
export declare class GetBlockPublicAccessConfigurationRequest extends SpeakeasyBase {
    headers: GetBlockPublicAccessConfigurationHeaders;
    request: Map<string, any>;
}
export declare class GetBlockPublicAccessConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    getBlockPublicAccessConfigurationOutput?: shared.GetBlockPublicAccessConfigurationOutput;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
