import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Compliance } from "./compliance";



// ComplianceByResource
/** 
 * Indicates whether an Amazon Web Services resource that is evaluated according to one or more Config rules is compliant. A resource is compliant if it complies with all of the rules that evaluate it. A resource is noncompliant if it does not comply with one or more of these rules.
**/
export class ComplianceByResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Compliance" })
  compliance?: Compliance;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: string;
}
