import { SpeakeasyBase } from "../../../internal/utils";
import { AuditSuppression } from "./auditsuppression";
export declare class ListAuditSuppressionsResponse extends SpeakeasyBase {
    nextToken?: string;
    suppressions?: AuditSuppression[];
}
