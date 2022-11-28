import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SecurityServiceTypeEnum } from "./securityservicetypeenum";



export class GetProtectionStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdminAccountId" })
  adminAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=Data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceType" })
  serviceType?: SecurityServiceTypeEnum;
}
