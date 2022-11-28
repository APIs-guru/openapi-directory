import { SpeakeasyBase } from "../../../internal/utils";
import { BuildNotDeleted } from "./buildnotdeleted";
export declare class BatchDeleteBuildsOutput extends SpeakeasyBase {
    buildsDeleted?: string[];
    buildsNotDeleted?: BuildNotDeleted[];
}
