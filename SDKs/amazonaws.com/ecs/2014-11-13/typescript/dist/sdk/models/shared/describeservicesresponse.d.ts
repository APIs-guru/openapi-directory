import { SpeakeasyBase } from "../../../internal/utils";
import { Failure } from "./failure";
import { Service } from "./service";
export declare class DescribeServicesResponse extends SpeakeasyBase {
    failures?: Failure[];
    services?: Service[];
}
