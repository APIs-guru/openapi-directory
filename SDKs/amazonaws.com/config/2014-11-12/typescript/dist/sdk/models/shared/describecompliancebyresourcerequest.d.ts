import { SpeakeasyBase } from "../../../internal/utils";
import { ComplianceTypeEnum } from "./compliancetypeenum";
/**
 * <p/>
**/
export declare class DescribeComplianceByResourceRequest extends SpeakeasyBase {
    complianceTypes?: ComplianceTypeEnum[];
    limit?: number;
    nextToken?: string;
    resourceId?: string;
    resourceType?: string;
}
