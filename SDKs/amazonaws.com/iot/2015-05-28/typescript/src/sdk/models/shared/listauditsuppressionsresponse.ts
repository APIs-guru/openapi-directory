import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuditSuppression } from "./auditsuppression";


export class ListAuditSuppressionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=suppressions", elemType: shared.AuditSuppression })
  suppressions?: AuditSuppression[];
}
