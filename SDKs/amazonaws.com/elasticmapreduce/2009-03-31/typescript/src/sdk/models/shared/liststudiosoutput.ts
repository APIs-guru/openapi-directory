import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StudioSummary } from "./studiosummary";


export class ListStudiosOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=Studios", elemType: shared.StudioSummary })
  studios?: StudioSummary[];
}
