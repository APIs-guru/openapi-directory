import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComplianceTypeEnum } from "./compliancetypeenum";


// ExternalEvaluation
/** 
 * Identifies an Amazon Web Services resource and indicates whether it complies with the Config rule that it was evaluated against.
**/
export class ExternalEvaluation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Annotation" })
  annotation?: string;

  @Metadata({ data: "json, name=ComplianceResourceId" })
  complianceResourceId: string;

  @Metadata({ data: "json, name=ComplianceResourceType" })
  complianceResourceType: string;

  @Metadata({ data: "json, name=ComplianceType" })
  complianceType: ComplianceTypeEnum;

  @Metadata({ data: "json, name=OrderingTimestamp" })
  orderingTimestamp: Date;
}
