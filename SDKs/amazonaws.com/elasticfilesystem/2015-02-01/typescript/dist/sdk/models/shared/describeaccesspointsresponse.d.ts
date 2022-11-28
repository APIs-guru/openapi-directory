import { SpeakeasyBase } from "../../../internal/utils";
import { AccessPointDescription } from "./accesspointdescription";
export declare class DescribeAccessPointsResponse extends SpeakeasyBase {
    accessPoints?: AccessPointDescription[];
    nextToken?: string;
}
