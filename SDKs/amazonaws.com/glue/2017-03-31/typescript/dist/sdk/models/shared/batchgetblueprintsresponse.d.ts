import { SpeakeasyBase } from "../../../internal/utils";
import { Blueprint } from "./blueprint";
export declare class BatchGetBlueprintsResponse extends SpeakeasyBase {
    blueprints?: Blueprint[];
    missingBlueprints?: string[];
}
