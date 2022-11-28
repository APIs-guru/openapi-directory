import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutBlockPublicAccessConfigurationXAmzTargetEnum {
    ElasticMapReducePutBlockPublicAccessConfiguration = "ElasticMapReduce.PutBlockPublicAccessConfiguration"
}
export declare class PutBlockPublicAccessConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutBlockPublicAccessConfigurationXAmzTargetEnum;
}
export declare class PutBlockPublicAccessConfigurationRequest extends SpeakeasyBase {
    headers: PutBlockPublicAccessConfigurationHeaders;
    request: shared.PutBlockPublicAccessConfigurationInput;
}
export declare class PutBlockPublicAccessConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    putBlockPublicAccessConfigurationOutput?: Map<string, any>;
    statusCode: number;
}
