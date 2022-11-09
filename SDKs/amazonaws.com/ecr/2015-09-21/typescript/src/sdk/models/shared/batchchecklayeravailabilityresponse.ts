import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LayerFailure } from "./layerfailure";
import { Layer } from "./layer";


export class BatchCheckLayerAvailabilityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=failures", elemType: shared.LayerFailure })
  failures?: LayerFailure[];

  @Metadata({ data: "json, name=layers", elemType: shared.Layer })
  layers?: Layer[];
}
