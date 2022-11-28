import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentClass } from "./documentclass";
import { DocumentLabel } from "./documentlabel";
export declare class ClassifyDocumentResponse extends SpeakeasyBase {
    classes?: DocumentClass[];
    labels?: DocumentLabel[];
}
