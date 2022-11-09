import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LocaleEnum } from "./localeenum";


export class GetExclusionsPreviewRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentTemplateArn" })
  assessmentTemplateArn: string;

  @Metadata({ data: "json, name=locale" })
  locale?: LocaleEnum;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=previewToken" })
  previewToken: string;
}
