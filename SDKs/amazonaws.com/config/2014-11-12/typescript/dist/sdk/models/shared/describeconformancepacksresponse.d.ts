import { SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackDetail } from "./conformancepackdetail";
export declare class DescribeConformancePacksResponse extends SpeakeasyBase {
    conformancePackDetails?: ConformancePackDetail[];
    nextToken?: string;
}
