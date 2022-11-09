import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ReloadTablesXAmzTargetEnum {
    AmazonDmSv20160101ReloadTables = "AmazonDMSv20160101.ReloadTables"
}
export declare class ReloadTablesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ReloadTablesXAmzTargetEnum;
}
export declare class ReloadTablesRequest extends SpeakeasyBase {
    headers: ReloadTablesHeaders;
    request: shared.ReloadTablesMessage;
}
export declare class ReloadTablesResponse extends SpeakeasyBase {
    contentType: string;
    invalidResourceStateFault?: any;
    reloadTablesResponse?: shared.ReloadTablesResponse;
    resourceNotFoundFault?: any;
    statusCode: number;
}
