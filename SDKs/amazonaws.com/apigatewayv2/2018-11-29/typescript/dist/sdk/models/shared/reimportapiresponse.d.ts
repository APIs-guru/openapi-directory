import { SpeakeasyBase } from "../../../internal/utils";
import { Cors } from "./cors";
import { ProtocolTypeEnum } from "./protocoltypeenum";
export declare class ReimportApiResponse extends SpeakeasyBase {
    apiEndpoint?: string;
    apiGatewayManaged?: boolean;
    apiId?: string;
    apiKeySelectionExpression?: string;
    corsConfiguration?: Cors;
    createdDate?: Date;
    description?: string;
    disableExecuteApiEndpoint?: boolean;
    disableSchemaValidation?: boolean;
    importInfo?: string[];
    name?: string;
    protocolType?: ProtocolTypeEnum;
    routeSelectionExpression?: string;
    tags?: Map<string, string>;
    version?: string;
    warnings?: string[];
}
