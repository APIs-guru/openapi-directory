import { SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackInputParameter } from "./conformancepackinputparameter";
export declare class PutConformancePackRequest extends SpeakeasyBase {
    conformancePackInputParameters?: ConformancePackInputParameter[];
    conformancePackName: string;
    deliveryS3Bucket?: string;
    deliveryS3KeyPrefix?: string;
    templateBody?: string;
    templateS3Uri?: string;
}
