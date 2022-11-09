import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Filter } from "./filter";
export declare class DescribeCertificatesMessage extends SpeakeasyBase {
    filters?: Filter[];
    marker?: string;
    maxRecords?: number;
}
