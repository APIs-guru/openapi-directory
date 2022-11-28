import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnrollmentFilterNameEnum } from "./enrollmentfilternameenum";



// EnrollmentFilter
/** 
 * Describes a filter that returns a more specific list of account enrollment statuses. Use this filter with the <a>GetEnrollmentStatusesForOrganization</a> action.
**/
export class EnrollmentFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: EnrollmentFilterNameEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
