import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComplianceByResource } from "./compliancebyresource";


// DescribeComplianceByResourceResponse
/** 
 * <p/>
**/
export class DescribeComplianceByResourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComplianceByResources", elemType: shared.ComplianceByResource })
  complianceByResources?: ComplianceByResource[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
