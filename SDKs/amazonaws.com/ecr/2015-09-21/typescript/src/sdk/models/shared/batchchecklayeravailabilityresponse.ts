import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LayerFailure } from "./layerfailure";
import { Layer } from "./layer";



export class BatchCheckLayerAvailabilityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failures", elemType: LayerFailure })
  failures?: LayerFailure[];

  @SpeakeasyMetadata({ data: "json, name=layers", elemType: Layer })
  layers?: Layer[];
}
