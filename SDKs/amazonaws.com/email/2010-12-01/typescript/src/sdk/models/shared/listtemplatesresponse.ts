import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TemplateMetadata } from "./templatemetadata";



export class ListTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: TemplateMetadata })
  templatesMetadata?: TemplateMetadata[];
}
