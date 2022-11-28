import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnrollmentFilter } from "./enrollmentfilter";



export class GetEnrollmentStatusesForOrganizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters", elemType: EnrollmentFilter })
  filters?: EnrollmentFilter[];

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
