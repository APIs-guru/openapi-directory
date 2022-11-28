import { SpeakeasyBase } from "../../../internal/utils";
import { ByoipCidr } from "./byoipcidr";
export declare class ListByoipCidrsResponse extends SpeakeasyBase {
    byoipCidrs?: ByoipCidr[];
    nextToken?: string;
}
