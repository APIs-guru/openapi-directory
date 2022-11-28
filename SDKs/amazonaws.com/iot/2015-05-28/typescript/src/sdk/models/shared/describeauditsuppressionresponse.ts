import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";



export class DescribeAuditSuppressionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checkName" })
  checkName?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=expirationDate" })
  expirationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=resourceIdentifier" })
  resourceIdentifier?: ResourceIdentifier;

  @SpeakeasyMetadata({ data: "json, name=suppressIndefinitely" })
  suppressIndefinitely?: boolean;
}
