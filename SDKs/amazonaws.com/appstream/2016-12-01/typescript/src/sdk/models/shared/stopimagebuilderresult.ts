import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageBuilder } from "./imagebuilder";


export class StopImageBuilderResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImageBuilder" })
  imageBuilder?: ImageBuilder;
}
