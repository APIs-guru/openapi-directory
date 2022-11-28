import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CancelStepsRequestStatusEnum } from "./cancelstepsrequeststatusenum";



// CancelStepsInfo
/** 
 * Specification of the status of a CancelSteps request. Available only in Amazon EMR version 4.8.0 and later, excluding version 5.0.0.
**/
export class CancelStepsInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: CancelStepsRequestStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StepId" })
  stepId?: string;
}
