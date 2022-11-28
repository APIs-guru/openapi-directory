import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContentHandlingStrategyEnum } from "./contenthandlingstrategyenum";



export class CreateIntegrationResponseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContentHandlingStrategy" })
  contentHandlingStrategy?: ContentHandlingStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=IntegrationResponseId" })
  integrationResponseId?: string;

  @SpeakeasyMetadata({ data: "json, name=IntegrationResponseKey" })
  integrationResponseKey?: string;

  @SpeakeasyMetadata({ data: "json, name=ResponseParameters" })
  responseParameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ResponseTemplates" })
  responseTemplates?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=TemplateSelectionExpression" })
  templateSelectionExpression?: string;
}
