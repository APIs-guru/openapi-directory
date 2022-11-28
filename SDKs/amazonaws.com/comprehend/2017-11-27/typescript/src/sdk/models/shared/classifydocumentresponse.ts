import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentClass } from "./documentclass";
import { DocumentLabel } from "./documentlabel";



export class ClassifyDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Classes", elemType: DocumentClass })
  classes?: DocumentClass[];

  @SpeakeasyMetadata({ data: "json, name=Labels", elemType: DocumentLabel })
  labels?: DocumentLabel[];
}
