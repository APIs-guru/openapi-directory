import { SpeakeasyBase } from "../../../internal/utils";
import { Volume } from "./volume";
export declare class DescribeVolumesResult extends SpeakeasyBase {
    nextToken?: string;
    volumes?: Volume[];
}
