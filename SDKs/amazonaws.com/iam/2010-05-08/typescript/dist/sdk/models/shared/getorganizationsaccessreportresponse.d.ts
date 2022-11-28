import { SpeakeasyBase } from "../../../internal/utils";
import { AccessDetail } from "./accessdetail";
import { ErrorDetails } from "./errordetails";
import { JobStatusTypeEnum } from "./jobstatustypeenum";
export declare class GetOrganizationsAccessReportResponse extends SpeakeasyBase {
    accessDetails?: AccessDetail[];
    errorDetails?: ErrorDetails;
    isTruncated?: boolean;
    jobCompletionDate?: Date;
    jobCreationDate: Date;
    jobStatus: JobStatusTypeEnum;
    marker?: string;
    numberOfServicesAccessible?: number;
    numberOfServicesNotAccessed?: number;
}
