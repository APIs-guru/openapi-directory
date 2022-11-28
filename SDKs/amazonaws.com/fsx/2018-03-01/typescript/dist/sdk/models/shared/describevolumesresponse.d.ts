import { SpeakeasyBase } from "../../../internal/utils";
import { Volume } from "./volume";
export declare class DescribeVolumesResponse extends SpeakeasyBase {
    nextToken?: string;
    volumes?: Volume[];
}
