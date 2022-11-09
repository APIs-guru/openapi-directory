import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CancelStepsRequestStatusEnum } from "./cancelstepsrequeststatusenum";


// CancelStepsInfo
/** 
 * Specification of the status of a CancelSteps request. Available only in Amazon EMR version 4.8.0 and later, excluding version 5.0.0.
**/
export class CancelStepsInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=Reason" })
  reason?: string;

  @Metadata({ data: "json, name=Status" })
  status?: CancelStepsRequestStatusEnum;

  @Metadata({ data: "json, name=StepId" })
  stepId?: string;
}
