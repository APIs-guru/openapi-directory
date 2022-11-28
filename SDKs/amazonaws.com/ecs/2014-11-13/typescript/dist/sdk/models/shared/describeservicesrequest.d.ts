import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceFieldEnum } from "./servicefieldenum";
export declare class DescribeServicesRequest extends SpeakeasyBase {
    cluster?: string;
    include?: ServiceFieldEnum[];
    services: string[];
}
