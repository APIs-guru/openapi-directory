import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EnrollmentFilterNameEnum } from "./enrollmentfilternameenum";
/**
 * Describes a filter that returns a more specific list of account enrollment statuses. Use this filter with the <a>GetEnrollmentStatusesForOrganization</a> action.
**/
export declare class EnrollmentFilter extends SpeakeasyBase {
    name?: EnrollmentFilterNameEnum;
    values?: string[];
}
