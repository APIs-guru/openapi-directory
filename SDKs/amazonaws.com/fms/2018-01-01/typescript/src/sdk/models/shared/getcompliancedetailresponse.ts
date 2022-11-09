import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PolicyComplianceDetail } from "./policycompliancedetail";


export class GetComplianceDetailResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=PolicyComplianceDetail" })
  policyComplianceDetail?: PolicyComplianceDetail;
}
