import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocaleEnum } from "./localeenum";



export class GetExclusionsPreviewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentTemplateArn" })
  assessmentTemplateArn: string;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: LocaleEnum;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=previewToken" })
  previewToken: string;
}
