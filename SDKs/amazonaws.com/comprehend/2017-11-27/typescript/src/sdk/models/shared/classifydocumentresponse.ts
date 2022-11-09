import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DocumentClass } from "./documentclass";
import { DocumentLabel } from "./documentlabel";


export class ClassifyDocumentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Classes", elemType: shared.DocumentClass })
  classes?: DocumentClass[];

  @Metadata({ data: "json, name=Labels", elemType: shared.DocumentLabel })
  labels?: DocumentLabel[];
}
