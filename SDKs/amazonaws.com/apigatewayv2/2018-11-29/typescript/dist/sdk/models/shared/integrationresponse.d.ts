import { SpeakeasyBase } from "../../../internal/utils";
import { ContentHandlingStrategyEnum } from "./contenthandlingstrategyenum";
/**
 * Represents an integration response.
**/
export declare class IntegrationResponse extends SpeakeasyBase {
    contentHandlingStrategy?: ContentHandlingStrategyEnum;
    integrationResponseId?: string;
    integrationResponseKey: string;
    responseParameters?: Map<string, string>;
    responseTemplates?: Map<string, string>;
    templateSelectionExpression?: string;
}
