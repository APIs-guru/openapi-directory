import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyComplianceDetail } from "./policycompliancedetail";



export class GetComplianceDetailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PolicyComplianceDetail" })
  policyComplianceDetail?: PolicyComplianceDetail;
}
