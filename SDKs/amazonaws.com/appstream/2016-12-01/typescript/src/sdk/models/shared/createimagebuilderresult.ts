import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageBuilder } from "./imagebuilder";


export class CreateImageBuilderResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImageBuilder" })
  imageBuilder?: ImageBuilder;
}
