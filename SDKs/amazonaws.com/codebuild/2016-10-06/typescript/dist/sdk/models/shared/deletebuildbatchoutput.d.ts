import { SpeakeasyBase } from "../../../internal/utils";
import { BuildNotDeleted } from "./buildnotdeleted";
export declare class DeleteBuildBatchOutput extends SpeakeasyBase {
    buildsDeleted?: string[];
    buildsNotDeleted?: BuildNotDeleted[];
    statusCode?: string;
}
