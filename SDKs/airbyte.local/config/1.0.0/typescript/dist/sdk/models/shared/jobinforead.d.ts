import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AttemptInfoRead } from "./attemptinforead";
import { JobRead } from "./jobread";
export declare class JobInfoRead extends SpeakeasyBase {
    attempts: AttemptInfoRead[];
    job: JobRead;
}
