import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ViolationDetail } from "./violationdetail";



export class GetViolationDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ViolationDetail" })
  violationDetail?: ViolationDetail;
}
