import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkProfileTypeEnum } from "./networkprofiletypeenum";
export declare class ListNetworkProfilesRequest extends SpeakeasyBase {
    arn: string;
    nextToken?: string;
    type?: NetworkProfileTypeEnum;
}
