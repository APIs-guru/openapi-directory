import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageBuilder } from "./imagebuilder";



export class StartImageBuilderResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImageBuilder" })
  imageBuilder?: ImageBuilder;
}
