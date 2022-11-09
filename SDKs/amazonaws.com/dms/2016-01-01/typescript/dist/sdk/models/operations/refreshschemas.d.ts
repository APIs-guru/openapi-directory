import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum RefreshSchemasXAmzTargetEnum {
    AmazonDmSv20160101RefreshSchemas = "AmazonDMSv20160101.RefreshSchemas"
}
export declare class RefreshSchemasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RefreshSchemasXAmzTargetEnum;
}
export declare class RefreshSchemasRequest extends SpeakeasyBase {
    headers: RefreshSchemasHeaders;
    request: shared.RefreshSchemasMessage;
}
export declare class RefreshSchemasResponse extends SpeakeasyBase {
    contentType: string;
    invalidResourceStateFault?: any;
    kmsKeyNotAccessibleFault?: any;
    refreshSchemasResponse?: shared.RefreshSchemasResponse;
    resourceNotFoundFault?: any;
    resourceQuotaExceededFault?: any;
    statusCode: number;
}
