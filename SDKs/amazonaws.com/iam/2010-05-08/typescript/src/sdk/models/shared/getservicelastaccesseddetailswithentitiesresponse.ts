import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityDetails } from "./entitydetails";
import { ErrorDetails } from "./errordetails";
import { JobStatusTypeEnum } from "./jobstatustypeenum";



export class GetServiceLastAccessedDetailsWithEntitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EntityDetails })
  entityDetailsList: EntityDetails[];

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
  marker?: string;
}
