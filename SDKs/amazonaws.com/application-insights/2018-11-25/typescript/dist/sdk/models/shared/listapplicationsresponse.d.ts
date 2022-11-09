import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationInfo } from "./applicationinfo";
export declare class ListApplicationsResponse extends SpeakeasyBase {
    applicationInfoList?: ApplicationInfo[];
    nextToken?: string;
}
