import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageBuilder } from "./imagebuilder";



export class StopImageBuilderResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImageBuilder" })
  imageBuilder?: ImageBuilder;
}
