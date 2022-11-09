import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EnrollmentFilter } from "./enrollmentfilter";
export declare class GetEnrollmentStatusesForOrganizationRequest extends SpeakeasyBase {
    filters?: EnrollmentFilter[];
    maxResults?: number;
    nextToken?: string;
}
