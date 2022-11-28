import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComplianceTypeEnum } from "./compliancetypeenum";



// Evaluation
/** 
 * Identifies an Amazon Web Services resource and indicates whether it complies with the Config rule that it was evaluated against.
**/
export class Evaluation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Annotation" })
  annotation?: string;

  @SpeakeasyMetadata({ data: "json, name=ComplianceResourceId" })
  complianceResourceId: string;

  @SpeakeasyMetadata({ data: "json, name=ComplianceResourceType" })
  complianceResourceType: string;

  @SpeakeasyMetadata({ data: "json, name=ComplianceType" })
  complianceType: ComplianceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=OrderingTimestamp" })
  orderingTimestamp: Date;
}
