import { SpeakeasyBase } from "../../../internal/utils";
import { DbEngineVersion } from "./dbengineversion";
/**
 * Represents the output of <a>DescribeDBEngineVersions</a>.
**/
export declare class DbEngineVersionMessage extends SpeakeasyBase {
    dbEngineVersions?: DbEngineVersion[];
    marker?: string;
}
