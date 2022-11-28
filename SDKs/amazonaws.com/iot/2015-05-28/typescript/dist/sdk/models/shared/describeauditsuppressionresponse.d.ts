import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";
export declare class DescribeAuditSuppressionResponse extends SpeakeasyBase {
    checkName?: string;
    description?: string;
    expirationDate?: Date;
    resourceIdentifier?: ResourceIdentifier;
    suppressIndefinitely?: boolean;
}
