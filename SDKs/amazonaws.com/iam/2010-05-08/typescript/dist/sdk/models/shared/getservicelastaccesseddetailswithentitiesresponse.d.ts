import { SpeakeasyBase } from "../../../internal/utils";
import { EntityDetails } from "./entitydetails";
import { ErrorDetails } from "./errordetails";
import { JobStatusTypeEnum } from "./jobstatustypeenum";
export declare class GetServiceLastAccessedDetailsWithEntitiesResponse extends SpeakeasyBase {
    entityDetailsList: EntityDetails[];
    error?: ErrorDetails;
    isTruncated?: boolean;
    jobCompletionDate: Date;
    jobCreationDate: Date;
    jobStatus: JobStatusTypeEnum;
    marker?: string;
}
