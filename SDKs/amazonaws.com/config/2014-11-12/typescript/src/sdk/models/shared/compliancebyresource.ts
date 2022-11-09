import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Compliance } from "./compliance";


// ComplianceByResource
/** 
 * Indicates whether an Amazon Web Services resource that is evaluated according to one or more Config rules is compliant. A resource is compliant if it complies with all of the rules that evaluate it. A resource is noncompliant if it does not comply with one or more of these rules.
**/
export class ComplianceByResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=Compliance" })
  compliance?: Compliance;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: string;
}
