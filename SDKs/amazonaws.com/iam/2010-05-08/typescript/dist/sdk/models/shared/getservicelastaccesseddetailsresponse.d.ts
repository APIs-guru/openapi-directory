import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetails } from "./errordetails";
import { JobStatusTypeEnum } from "./jobstatustypeenum";
import { AccessAdvisorUsageGranularityTypeEnum } from "./accessadvisorusagegranularitytypeenum";
import { ServiceLastAccessed } from "./servicelastaccessed";
export declare class GetServiceLastAccessedDetailsResponse extends SpeakeasyBase {
    error?: ErrorDetails;
    isTruncated?: boolean;
    jobCompletionDate: Date;
    jobCreationDate: Date;
    jobStatus: JobStatusTypeEnum;
    jobType?: AccessAdvisorUsageGranularityTypeEnum;
    marker?: string;
    servicesLastAccessed: ServiceLastAccessed[];
}
