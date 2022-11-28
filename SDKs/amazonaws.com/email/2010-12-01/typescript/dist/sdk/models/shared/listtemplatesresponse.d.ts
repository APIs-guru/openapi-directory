import { SpeakeasyBase } from "../../../internal/utils";
import { TemplateMetadata } from "./templatemetadata";
export declare class ListTemplatesResponse extends SpeakeasyBase {
    nextToken?: string;
    templatesMetadata?: TemplateMetadata[];
}
