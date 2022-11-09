import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Failure } from "./failure";
import { Service } from "./service";


export class DescribeServicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=failures", elemType: shared.Failure })
  failures?: Failure[];

  @Metadata({ data: "json, name=services", elemType: shared.Service })
  services?: Service[];
}
