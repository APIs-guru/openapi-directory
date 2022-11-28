import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Failure } from "./failure";
import { Service } from "./service";



export class DescribeServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failures", elemType: Failure })
  failures?: Failure[];

  @SpeakeasyMetadata({ data: "json, name=services", elemType: Service })
  services?: Service[];
}
