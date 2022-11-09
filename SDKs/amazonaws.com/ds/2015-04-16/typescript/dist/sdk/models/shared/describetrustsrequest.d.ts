import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Describes the trust relationships for a particular Managed Microsoft AD directory. If no input parameters are provided, such as directory ID or trust ID, this request describes all the trust relationships.
**/
export declare class DescribeTrustsRequest extends SpeakeasyBase {
    directoryId?: string;
    limit?: number;
    nextToken?: string;
    trustIds?: string[];
}
