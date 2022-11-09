import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContentHandlingStrategyEnum } from "./contenthandlingstrategyenum";


export class GetIntegrationResponseResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContentHandlingStrategy" })
  contentHandlingStrategy?: ContentHandlingStrategyEnum;

  @Metadata({ data: "json, name=IntegrationResponseId" })
  integrationResponseId?: string;

  @Metadata({ data: "json, name=IntegrationResponseKey" })
  integrationResponseKey?: string;

  @Metadata({ data: "json, name=ResponseParameters" })
  responseParameters?: Map<string, string>;

  @Metadata({ data: "json, name=ResponseTemplates" })
  responseTemplates?: Map<string, string>;

  @Metadata({ data: "json, name=TemplateSelectionExpression" })
  templateSelectionExpression?: string;
}
