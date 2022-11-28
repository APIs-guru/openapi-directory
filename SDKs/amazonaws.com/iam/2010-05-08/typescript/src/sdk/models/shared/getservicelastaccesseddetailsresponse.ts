import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetails } from "./errordetails";
import { JobStatusTypeEnum } from "./jobstatustypeenum";
import { AccessAdvisorUsageGranularityTypeEnum } from "./accessadvisorusagegranularitytypeenum";
import { ServiceLastAccessed } from "./servicelastaccessed";



export class GetServiceLastAccessedDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  error?: ErrorDetails;

  @SpeakeasyMetadata()
  isTruncated?: boolean;

  @SpeakeasyMetadata()
  jobCompletionDate: Date;

  @SpeakeasyMetadata()
  jobCreationDate: Date;

  @SpeakeasyMetadata()
  jobStatus: JobStatusTypeEnum;

  @SpeakeasyMetadata()
  jobType?: AccessAdvisorUsageGranularityTypeEnum;

  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ServiceLastAccessed })
  servicesLastAccessed: ServiceLastAccessed[];
}
