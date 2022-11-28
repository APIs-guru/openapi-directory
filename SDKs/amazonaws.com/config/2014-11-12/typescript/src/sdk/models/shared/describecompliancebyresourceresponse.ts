import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComplianceByResource } from "./compliancebyresource";



// DescribeComplianceByResourceResponse
/** 
 * <p/>
**/
export class DescribeComplianceByResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComplianceByResources", elemType: ComplianceByResource })
  complianceByResources?: ComplianceByResource[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
