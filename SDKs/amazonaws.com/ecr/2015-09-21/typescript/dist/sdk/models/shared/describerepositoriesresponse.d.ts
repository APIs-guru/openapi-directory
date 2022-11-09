import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Repository } from "./repository";
export declare class DescribeRepositoriesResponse extends SpeakeasyBase {
    nextToken?: string;
    repositories?: Repository[];
}
