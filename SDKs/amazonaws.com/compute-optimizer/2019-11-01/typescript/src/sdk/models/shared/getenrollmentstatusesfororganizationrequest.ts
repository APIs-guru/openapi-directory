import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnrollmentFilter } from "./enrollmentfilter";


export class GetEnrollmentStatusesForOrganizationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filters", elemType: shared.EnrollmentFilter })
  filters?: EnrollmentFilter[];

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
