import { SpeakeasyBase } from "../../../internal/utils";
import { ContentHandlingStrategyEnum } from "./contenthandlingstrategyenum";
export declare class CreateIntegrationResponseResponse extends SpeakeasyBase {
    contentHandlingStrategy?: ContentHandlingStrategyEnum;
    integrationResponseId?: string;
    integrationResponseKey?: string;
    responseParameters?: Map<string, string>;
    responseTemplates?: Map<string, string>;
    templateSelectionExpression?: string;
}
