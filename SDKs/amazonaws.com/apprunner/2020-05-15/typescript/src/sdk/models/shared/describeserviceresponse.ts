import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Service } from "./service";


export class DescribeServiceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Service" })
  service: Service;
}
