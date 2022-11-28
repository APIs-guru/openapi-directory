import { SpeakeasyBase } from "../../../internal/utils";
import { LocaleEnum } from "./localeenum";
export declare class GetExclusionsPreviewRequest extends SpeakeasyBase {
    assessmentTemplateArn: string;
    locale?: LocaleEnum;
    maxResults?: number;
    nextToken?: string;
    previewToken: string;
}
