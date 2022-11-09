import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceIdentifier } from "./resourceidentifier";


// AuditSuppression
/** 
 *  Filters out specific findings of a Device Defender audit. 
**/
export class AuditSuppression extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkName" })
  checkName: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=expirationDate" })
  expirationDate?: Date;

  @Metadata({ data: "json, name=resourceIdentifier" })
  resourceIdentifier: ResourceIdentifier;

  @Metadata({ data: "json, name=suppressIndefinitely" })
  suppressIndefinitely?: boolean;
}
