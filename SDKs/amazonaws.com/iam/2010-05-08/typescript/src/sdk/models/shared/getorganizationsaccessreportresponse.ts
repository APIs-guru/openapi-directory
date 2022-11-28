import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessDetail } from "./accessdetail";
import { ErrorDetails } from "./errordetails";
import { JobStatusTypeEnum } from "./jobstatustypeenum";



export class GetOrganizationsAccessReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AccessDetail })
  accessDetails?: AccessDetail[];

  @SpeakeasyMetadata()
  errorDetails?: ErrorDetails;

  @SpeakeasyMetadata()
  isTruncated?: boolean;

  @SpeakeasyMetadata()
  jobCompletionDate?: Date;

  @SpeakeasyMetadata()
  jobCreationDate: Date;

  @SpeakeasyMetadata()
  jobStatus: JobStatusTypeEnum;

  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata()
  numberOfServicesAccessible?: number;

  @SpeakeasyMetadata()
  numberOfServicesNotAccessed?: number;
}
