import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Pipeline } from "./pipeline";


export class DescribePipelineResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=pipeline" })
  pipeline?: Pipeline;
}
