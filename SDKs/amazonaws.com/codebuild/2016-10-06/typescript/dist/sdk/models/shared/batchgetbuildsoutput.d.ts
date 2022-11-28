import { SpeakeasyBase } from "../../../internal/utils";
import { Build } from "./build";
export declare class BatchGetBuildsOutput extends SpeakeasyBase {
    builds?: Build[];
    buildsNotFound?: string[];
}
