import { SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackInputParameter } from "./conformancepackinputparameter";
/**
 * Returns details of a conformance pack. A conformance pack is a collection of Config rules and remediation actions that can be easily deployed in an account and a region.
**/
export declare class ConformancePackDetail extends SpeakeasyBase {
    conformancePackArn: string;
    conformancePackId: string;
    conformancePackInputParameters?: ConformancePackInputParameter[];
    conformancePackName: string;
    createdBy?: string;
    deliveryS3Bucket?: string;
    deliveryS3KeyPrefix?: string;
    lastUpdateRequestedTime?: Date;
}
