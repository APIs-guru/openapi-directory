import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageBuilder } from "./imagebuilder";


export class DeleteImageBuilderResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImageBuilder" })
  imageBuilder?: ImageBuilder;
}
