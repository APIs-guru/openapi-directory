import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Assessment } from "./assessment";
import { Role } from "./role";
export declare class GetAssessmentResponse extends SpeakeasyBase {
    assessment?: Assessment;
    userRole?: Role;
}
