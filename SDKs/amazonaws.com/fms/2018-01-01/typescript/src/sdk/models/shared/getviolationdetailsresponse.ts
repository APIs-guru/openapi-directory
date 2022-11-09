import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ViolationDetail } from "./violationdetail";


export class GetViolationDetailsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ViolationDetail" })
  violationDetail?: ViolationDetail;
}
