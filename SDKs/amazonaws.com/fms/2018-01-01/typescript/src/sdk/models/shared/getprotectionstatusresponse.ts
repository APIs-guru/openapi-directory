import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SecurityServiceTypeEnum } from "./securityservicetypeenum";


export class GetProtectionStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdminAccountId" })
  adminAccountId?: string;

  @Metadata({ data: "json, name=Data" })
  data?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ServiceType" })
  serviceType?: SecurityServiceTypeEnum;
}
