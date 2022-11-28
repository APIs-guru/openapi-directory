import { SpeakeasyBase } from "../../../internal/utils";
import { LayerFailure } from "./layerfailure";
import { Layer } from "./layer";
export declare class BatchCheckLayerAvailabilityResponse extends SpeakeasyBase {
    failures?: LayerFailure[];
    layers?: Layer[];
}
