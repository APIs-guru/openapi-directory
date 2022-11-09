import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageBuilder } from "./imagebuilder";


export class StartImageBuilderResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImageBuilder" })
  imageBuilder?: ImageBuilder;
}
