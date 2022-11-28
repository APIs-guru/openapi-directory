import { SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";
export declare class DescribeCertificatesResponse extends SpeakeasyBase {
    certificates?: Certificate[];
    marker?: string;
}
