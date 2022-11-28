import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The content of the email, composed of a subject line, an HTML part, and a text-only part.
**/
export declare class Template extends SpeakeasyBase {
    htmlPart?: string;
    subjectPart?: string;
    templateName: string;
    textPart?: string;
}
