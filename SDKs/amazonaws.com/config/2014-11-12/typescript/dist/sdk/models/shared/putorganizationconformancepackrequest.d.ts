import { SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackInputParameter } from "./conformancepackinputparameter";
export declare class PutOrganizationConformancePackRequest extends SpeakeasyBase {
    conformancePackInputParameters?: ConformancePackInputParameter[];
    deliveryS3Bucket?: string;
    deliveryS3KeyPrefix?: string;
    excludedAccounts?: string[];
    organizationConformancePackName: string;
    templateBody?: string;
    templateS3Uri?: string;
}
