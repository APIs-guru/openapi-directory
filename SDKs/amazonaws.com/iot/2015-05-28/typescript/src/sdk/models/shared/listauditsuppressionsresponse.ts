import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuditSuppression } from "./auditsuppression";



export class ListAuditSuppressionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=suppressions", elemType: AuditSuppression })
  suppressions?: AuditSuppression[];
}
