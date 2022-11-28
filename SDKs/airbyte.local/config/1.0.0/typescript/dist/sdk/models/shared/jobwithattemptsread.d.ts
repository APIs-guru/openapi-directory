import { SpeakeasyBase } from "../../../internal/utils";
import { AttemptRead } from "./attemptread";
import { JobRead } from "./jobread";
export declare class JobWithAttemptsRead extends SpeakeasyBase {
    attempts?: AttemptRead[];
    job?: JobRead;
}
